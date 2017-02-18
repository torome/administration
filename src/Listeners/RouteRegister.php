<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-02-18 14:12
 */
namespace Notadd\Administration\Listeners;

use Notadd\Administration\Controllers\AdminController;
use Notadd\Foundation\Routing\Abstracts\RouteRegistrar as AbstractRouteRegistrar;

/**
 * Class RouteRegister.
 */
class RouteRegister extends AbstractRouteRegistrar
{
    /**
     * Handle Route Registrar.
     */
    public function handle()
    {
        $this->router->group(['middleware' => ['cross', 'web'], 'prefix' => 'admin'], function () {
            $this->router->post('token', AdminController::class . '@token');
        });
        $this->router->group(['middleware' => ['auth:api', 'cross', 'web'], 'prefix' => 'admin'], function () {
            $this->router->post('/', AdminController::class . '@access');
        });
    }
}
