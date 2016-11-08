<?php
/**
 * This file is part of Notadd.
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-11-08 13:51
 */
namespace Notadd\Administration\Controllers;
use GuzzleHttp\Client;
use Illuminate\Auth\AuthManager;
use Illuminate\Support\Facades\Lang;
use Notadd\Foundation\Auth\AuthenticatesUsers;
use Notadd\Foundation\Passport\Responses\ApiResponse;
use Notadd\Foundation\Routing\Abstracts\Controller;
/**
 * Class AdminController
 * @package Notadd\Admininstration\Controllers
 */
class AdminController extends Controller {
    use AuthenticatesUsers;
    /**
     * @param \Illuminate\Auth\AuthManager $auth
     * @param \Notadd\Foundation\Passport\Responses\ApiResponse $response
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     */
    public function access(AuthManager $auth, ApiResponse $response) {
        if($auth->guard()->user()) {
            $http = new Client();
            $back = $http->post($this->container->make('url')->to('oauth/access'), [
                'form_params' => [
                    'grant_type' => 'client_credentials',
                    'client_id' => '4',
                    'client_secret' => 'kI6stFinNexkZkvtIn3MdJIGCErbJcjnubFBwM4H',
                    'scope' => '*',
                ],
            ]);
            $back = json_decode((string)$back->getBody(), true);
            dd($back);
            if(isset($back['access_token'])) {
                return $response->withParams([
                    'status' => 'success'
                ])->withParams($back)->generateHttpResponse();
            }
        }
        return $response->withParams([
            'status' => 'error',
            'message' => 'Please Login!'
        ])->generateHttpResponse();
    }
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function handle() {
        return $this->view('admin::layout');
    }
    /**
     * @param \Notadd\Foundation\Passport\Responses\ApiResponse $response
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     */
    public function token(ApiResponse $response) {
        $this->validateLogin($this->request);
        if($this->hasTooManyLoginAttempts($this->request)) {
            $this->fireLockoutEvent($this->request);
            $seconds = $this->limiter()->availableIn($this->throttleKey($this->request));
            $message = Lang::get('auth.throttle', ['seconds' => $seconds]);
            return $response->withParams([
                'status' => 'error',
                'message' => $message
            ])->generateHttpResponse();
        }
        $credentials = $this->credentials($this->request);
        if($this->guard()->attempt($credentials, $this->request->has('remember'))) {
            $this->request->session()->regenerate();
            $this->clearLoginAttempts($this->request);
            $http = new Client();
            $back = $http->post($this->container->make('url')->to('oauth/access'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '4',
                    'client_secret' => 'kI6stFinNexkZkvtIn3MdJIGCErbJcjnubFBwM4H',
                    'username' => $this->request->offsetGet($this->username()),
                    'password' => $this->request->offsetGet('password'),
                    'scope' => '*',
                ],
            ]);
            $back = json_decode((string)$back->getBody(), true);
            if(isset($back['access_token']) && isset($back['refresh_token'])) {
                return $response->withParams([
                    'status' => 'success'
                ])->withParams($back)->generateHttpResponse();
            }
        }
        return $response->withParams([
            'status' => 'error',
            'message' => 'Login Error!'
        ])->generateHttpResponse();
    }
    /**
     * @return string
     */
    public function username() {
        return 'name';
    }
}