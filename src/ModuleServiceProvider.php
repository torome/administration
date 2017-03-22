<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-10-25 17:42
 */
namespace Notadd\Administration;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Events\Dispatcher;
use Notadd\Administration\Controllers\AdminController;
use Notadd\Administration\Listeners\CsrfTokenRegister;
use Notadd\Administration\Listeners\RouteRegister;
use Notadd\Administration\Observers\ArticleObserver;
use Notadd\Administration\Observers\PageObserver;
use Notadd\Content\Models\Article;
use Notadd\Content\Models\Page;
use Notadd\Foundation\Administration\Administration;
use Notadd\Foundation\Module\Abstracts\Module;

/**
 * Class Extension.
 */
class ModuleServiceProvider extends Module
{
    /**
     * @var \Notadd\Foundation\Administration\Administration
     */
    protected $administration;

    /**
     * ModuleServiceProvider constructor.
     *
     * @param \Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        parent::__construct($app);
        $this->administration = $app[Administration::class];
    }

    /**
     * Boot service provider.
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function boot()
    {
        $administrator = new Administrator($this->app['events'], $this->app['router']);
        $administrator->registerPath('admin');
        $administrator->registerHandler(AdminController::class . '@handle');
        $this->administration->setAdministrator($administrator);
        $this->app->make(Dispatcher::class)->subscribe(CsrfTokenRegister::class);
        $this->app->make(Dispatcher::class)->subscribe(RouteRegister::class);
        $this->loadTranslationsFrom(realpath(__DIR__ . '/../resources/translations'), 'administration');
        $this->loadViewsFrom(realpath(__DIR__ . '/../resources/views'), 'admin');
        $this->publishes([
            realpath(__DIR__ . '/../resources/mixes/administration/dist/assets/admin') => public_path('assets/admin'),
            realpath(__DIR__ . '/../resources/mixes/neditor')                          => public_path('assets/neditor'),
        ], 'public');

        class_exists(Article::class) && Article::observe(ArticleObserver::class);
        class_exists(Page::class) && Page::observe(PageObserver::class);
    }

    /**
     * Description of module
     *
     * @return string
     */
    public static function description()
    {
        return 'Notadd 后台管理模块';
    }

    /**
     * Install module.
     *
     * @return bool
     */
    public static function install()
    {
        return true;
    }

    /**
     * Name of module.
     *
     * @return string
     */
    public static function name()
    {
        return '后台管理';
    }

    /**
     * Uninstall module.
     *
     * @return mixed
     */
    public static function uninstall()
    {
        return true;
    }

    /**
     * Version of module.
     *
     * @return string
     */
    public static function version()
    {
        return '2.0.0';
    }
}
