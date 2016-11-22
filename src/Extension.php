<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-10-25 17:42
 */
namespace Notadd\Administration;

use Notadd\Administration\Controllers\AdminController;
use Notadd\Foundation\Administration\Administration;
use Notadd\Foundation\Extension\Abstracts\ExtensionRegistrar;

/**
 * Class Extension.
 */
class Extension extends ExtensionRegistrar
{
    /**
     * @return array
     */
    public function getExtensionInfo()
    {
        return [
            'author' => 'twilroad <269044570@qq.com>',
            'description' => 'A module for Notadd',
        ];
    }

    /**
     * @return string
     */
    public function getExtensionName()
    {
        return 'notadd/administration';
    }

    /**
     * @return string
     */
    public function getExtensionPath()
    {
        return realpath(__DIR__ . '/../');
    }

    /**
     * @return array
     */
    public function loadPublishesFrom()
    {
        return [
            base_path('extensions/administration/resources/assets/dist') => public_path('assets/admin')
        ];
    }

    /**
     * @return array
     */
    public function loadViewsFrom()
    {
        return [
            'admin' => __DIR__ . '/../resources/views',
        ];
    }

    /**
     * @param \Notadd\Foundation\Administration\Administration $administration
     */
    public function register(Administration $administration)
    {
        $administrator = new Administrator($this->container['events'], $this->container['router']);
        $administrator->registerPath('admin');
        $administrator->registerHandler(AdminController::class . '@handle');
        $administration->setAdministrator($administrator);
        $this->router->group(['middleware' => 'web', 'prefix' => 'admin'], function () {
            $this->router->post('token', AdminController::class . '@token');
        });
        $this->router->group(['middleware' => ['auth:api', 'web'], 'prefix' => 'admin'], function () {
            $this->router->post('/', AdminController::class . '@access');
        });
    }
}
