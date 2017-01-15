# Administration 的 Token 验证机制

Administration 的 Token 验证基于 Passport 组件实现，并且是类型为 password 的 Token 验证。

Token 验证处理指向的路由：

* http://you-domain/admin/token

前端需要向后端发送的数据：

* name
* password

前端接收到后端返回的数据：

* access_token
* expires_in
* refresh_token
* status
* token_type

获取 token 验证信息后的 api 中需在前端请求中添加的 headers 数据：

* Accept
* Authorization

Token 验证算法实现：

```php
/**
 * Exchange token by username and password.
 *
 * @param \Notadd\Foundation\Passport\Responses\ApiResponse $response
 *
 * @return \Notadd\Foundation\Passport\Responses\ApiResponse
 * @throws \Illuminate\Validation\ValidationException
 */
public function token(ApiResponse $response)
{
    $this->validateLogin($this->request);
    if ($this->hasTooManyLoginAttempts($this->request)) {
        $this->fireLockoutEvent($this->request);
        $seconds = $this->limiter()->availableIn($this->throttleKey($this->request));
        $message = $this->translator->get('auth.throttle', ['seconds' => $seconds]);

        return $response->withParams([
            'status'  => 'error',
            'message' => $message,
        ])->generateHttpResponse();
    }
    $credentials = $this->credentials($this->request);
    if ($this->guard()->attempt($credentials, $this->request->has('remember'))) {
        $this->request->session()->regenerate();
        $this->clearLoginAttempts($this->request);
        $http = new GuzzleClient();
        $back = $http->post($this->url->to('oauth/access'), [
            'form_params' => [
                'grant_type'    => 'password',
                'client_id'     => $this->client_id,
                'client_secret' => $this->client_secret,
                'username'      => $this->request->offsetGet($this->username()),
                'password'      => $this->request->offsetGet('password'),
                'scope'         => '*',
            ],
        ]);
        $back = json_decode((string)$back->getBody(), true);
        if (isset($back['access_token']) && isset($back['refresh_token'])) {
            return $response->withParams([
                'status' => 'success',
            ])->withParams($back)->generateHttpResponse();
        }
    }

    return $response->withParams([
        'status'  => 'error',
        'message' => 'Login Error!',
    ])->generateHttpResponse();
}
```