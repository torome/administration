<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-11-08 13:51
 */
namespace Notadd\Administration\Controllers;

use Exception;
use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Auth\AuthManager;
use Illuminate\Routing\UrlGenerator;
use Laravel\Passport\Client as PassportClient;
use Notadd\Foundation\Auth\AuthenticatesUsers;
use Notadd\Foundation\Extension\ExtensionManager;
use Notadd\Foundation\Module\ModuleManager;
use Notadd\Foundation\Passport\Responses\ApiResponse;
use Notadd\Foundation\Routing\Abstracts\Controller;
use Notadd\Foundation\Translation\Translator;

/**
 * Class AdminController.
 */
class AdminController extends Controller
{
    use AuthenticatesUsers;

    /**
     * @var int
     */
    protected $client_id;

    /**
     * @var string
     */
    protected $client_secret;

    /**
     * @var \Illuminate\Routing\UrlGenerator
     */
    protected $url;

    /**
     * @var \Notadd\Foundation\Translation\Translator
     */
    protected $translator;

    /**
     * AdminController constructor.
     *
     * @param \Notadd\Foundation\Translation\Translator $translator
     */
    public function __construct(Translator $translator)
    {
        parent::__construct();
        $this->client_id = 1;
        $client = PassportClient::query()->findOrFail($this->client_id);
        $this->client_secret = $client->getAttribute('secret');
        $this->translator = $translator;
        $this->url = $this->container->make(UrlGenerator::class);
    }

    /**
     * Get access token.
     *
     * @param \Illuminate\Auth\AuthManager                      $auth
     * @param \Notadd\Foundation\Passport\Responses\ApiResponse $response
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function access(AuthManager $auth, ApiResponse $response)
    {
        if ($auth->guard('api')->user()) {
            try {
                $http = new GuzzleClient();
                $back = $http->post($this->container->make('url')->to('oauth/access'), [
                    'form_params' => [
                        'grant_type'    => 'client_credentials',
                        'client_id'     => $this->client_id,
                        'client_secret' => $this->client_secret,
                        'scope'         => '*',
                    ],
                ]);
                $back = json_decode((string)$back->getBody(), true);
                if (isset($back['access_token'])) {
                    return $response->withParams([
                        'status' => 'success',
                    ])->withParams($back)->generateHttpResponse();
                }
            } catch (Exception $exception) {
                return $response->withParams([
                    'code' => $exception->getCode(),
                    'message' => $exception->getMessage(),
                    'trace' => $exception->getTraceAsString(),
                ])->generateHttpResponse();
            }
        }

        return $response->withParams([
            'status'  => 'error',
            'message' => 'Please Login !',
        ])->generateHttpResponse();
    }

    /**
     * Return index content.
     *
     * @param \Notadd\Foundation\Extension\ExtensionManager $extension
     * @param \Notadd\Foundation\Module\ModuleManager       $module
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function handle(ExtensionManager $extension, ModuleManager $module)
    {
        $this->share('extensions', $extension->getEnabledExtensions());
        $this->share('modules', $module->getEnabledModules());
        $this->share('translations', json_encode($this->translator->fetch('zh-cn')));
        return $this->view('admin::layout');
    }

    /**
     * Exchange token by username and password.
     *
     * @param \Notadd\Foundation\Passport\Responses\ApiResponse $response
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
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
            try {
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
            } catch (Exception $exception) {
                return $response->withParams([
                    'code' => $exception->getCode(),
                    'message' => $exception->getMessage(),
                    'trace' => $exception->getTraceAsString(),
                ])->generateHttpResponse();
            }
        }

        return $response->withParams([
            'status'  => 'error',
            'message' => 'Login Error!',
        ])->generateHttpResponse();
    }

    /**
     * Username id.
     *
     * @return string
     */
    public function username()
    {
        return 'name';
    }
}
