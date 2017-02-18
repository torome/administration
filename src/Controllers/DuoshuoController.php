<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-02-18 14:55
 */
namespace Notadd\Administration\Controllers;

use Notadd\Administration\Handlers\Duoshuo\ConfigurationHandler;
use Notadd\Administration\Handlers\Duoshuo\NumberHandler;
use Notadd\Foundation\Routing\Abstracts\Controller;

/**
 * Class DuoshuoController.
 */
class DuoshuoController extends Controller
{
    public function backup()
    {
        
    }
    
    /**
     * Configuration handler.
     *
     * @param \Notadd\Administration\Handlers\Duoshuo\ConfigurationHandler $handler
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse|\Psr\Http\Message\ResponseInterface|\Zend\Diactoros\Response
     * @throws \Exception
     */
    public function configuration(ConfigurationHandler $handler)
    {
        return $handler->toResponse()->generateHttpResponse();
    }

    /**
     * Number handler.
     *
     * @param \Notadd\Administration\Handlers\Duoshuo\NumberHandler $handler
     *
     * @return \Notadd\Foundation\Passport\Responses\ApiResponse|\Psr\Http\Message\ResponseInterface|\Zend\Diactoros\Response
     * @throws \Exception
     */
    public function number(NumberHandler $handler)
    {
        return $handler->toResponse()->generateHttpResponse();
    }
}
