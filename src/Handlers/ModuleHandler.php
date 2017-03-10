<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-03-10 16:51
 */
namespace Notadd\Administration\Handlers;

use Illuminate\Container\Container;
use Notadd\Administration\ModuleServiceProvider;
use Notadd\Foundation\Module\Module;
use Notadd\Foundation\Module\ModuleManager;
use Notadd\Foundation\Passport\Abstracts\DataHandler;

/**
 * Class ModuleHandler.
 */
class ModuleHandler extends DataHandler
{
    /**
     * @var \Notadd\Foundation\Module\ModuleManager
     */
    protected $manager;

    /**
     * ModuleHandler constructor.
     *
     * @param \Illuminate\Container\Container         $container
     * @param \Notadd\Foundation\Module\ModuleManager $manager
     */
    public function __construct(
        Container $container,
        ModuleManager $manager
    ) {
        parent::__construct($container);
        $this->manager = $manager;
    }

    /**
     * Http code.
     *
     * @return int
     */
    public function code()
    {
        return 200;
    }

    /**
     * Data for handler.
     *
     * @return array
     */
    public function data()
    {
        $modules = $this->manager->getModules();
        $modules->transform(function (Module $module) {
            return [
                'author' => $module->getAuthor(),
                'enabled' => $module->isEnabled(),
                'description' => $module->getDescription(),
                'identification' => $module->getIdentification(),
                'name' => $module->getName(),
            ];
        });
        $modules->offsetUnset(ModuleServiceProvider::name());

        return $modules->toArray();
    }

    /**
     * Errors for handler.
     *
     * @return array
     */
    public function errors()
    {
        return [
            '获取全局设置失败！',
        ];
    }

    /**
     * Messages for handler.
     *
     * @return array
     */
    public function messages()
    {
        return [
            '获取全局设置成功！',
        ];
    }
}
