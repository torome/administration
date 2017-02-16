<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-10-25 17:42
 */
namespace Notadd\Administration;

use Illuminate\Events\Dispatcher;
use Illuminate\Support\ServiceProvider;
use Notadd\Administration\Controllers\AdminController;
use Notadd\Administration\Listeners\CsrfTokenRegister;
use Notadd\Foundation\Administration\Administration;

/**
 * Class Extension.
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Boot service provider.
     *
     * @param \Notadd\Foundation\Administration\Administration $administration
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function boot(Administration $administration)
    {
        $administrator = new Administrator($this->app['events'], $this->app['router']);
        $administrator->registerPath('admin');
        $administrator->registerHandler(AdminController::class . '@handle');
        $administration->setAdministrator($administrator);
        $this->app->make(Dispatcher::class)->subscribe(CsrfTokenRegister::class);
        $this->app->make('router')->group(['middleware' => ['cross', 'web'], 'prefix' => 'admin'], function () {
            $this->app->make('router')->post('token', AdminController::class . '@token');
        });
        $this->app->make('router')->group(['middleware' => ['auth:api', 'cross', 'web'], 'prefix' => 'admin'], function () {
            $this->app->make('router')->post('/', AdminController::class . '@access');
        });
        $this->loadViewsFrom(realpath(__DIR__ . '/../resources/views'), 'admin');
        $this->publishes([
            base_path('modules/administration/resources/assets/dist/assets/admin') => public_path('assets/admin'),
            base_path('modules/administration/resources/neditor') => public_path('assets/neditor'),
        ], 'public');
    }
}
