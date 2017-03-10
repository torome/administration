<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-03-10 14:12
 */
namespace Notadd\Administration\Controllers;

use Notadd\Administration\Handlers\ModuleHandler;
use Notadd\Foundation\Routing\Abstracts\Controller;

/**
 * Class InjectionController.
 */
class InjectionController extends Controller
{
    /**
     * Module handler.
     *
     * @param \Notadd\Administration\Handlers\ModuleHandler $handler
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse|\Psr\Http\Message\ResponseInterface|\Zend\Diactoros\Response
     */
    public function module(ModuleHandler $handler)
    {
        return $handler->toResponse()->generateHttpResponse();
    }
}
