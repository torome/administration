<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-02-18 15:56
 */
namespace Notadd\Administration\Observers;

use Illuminate\Container\Container;
use Illuminate\Contracts\Logging\Log;
use Notadd\Content\Models\Article;
use Notadd\Foundation\Setting\Contracts\SettingsRepository;

/**
 * Class ArticleObserver.
 */
class ArticleObserver
{
    /**
     * @var \Illuminate\Container\Container
     */
    protected $container;

    /**
     * @var \Illuminate\Contracts\Logging\Log
     */
    protected $log;

    /**
     * @var \Notadd\Foundation\Setting\Contracts\SettingsRepository
     */
    protected $settings;

    /**
     * ArticleObserver constructor.
     *
     * @param \Illuminate\Container\Container   $container
     * @param \Illuminate\Contracts\Logging\Log $log
     */
    public function __construct(Container $container, Log $log, SettingsRepository $settings)
    {
        $this->container = $container;
        $this->log = $log;
        $this->settings = $settings;
    }

    /**
     * Created handler.
     *
     * @param \Notadd\Content\Models\Article $article
     *
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function created(Article $article)
    {
        $enable = $this->settings->get('baidu.enabled');
        $token = $this->settings->get('baidu.token');

        if($enable && $token) {
            $ch = curl_init();
            $options =  array(
                CURLOPT_URL => 'http://data.zz.baidu.com/urls?site=' . url('') . '&token=' . $token,
                CURLOPT_POST => true,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_POSTFIELDS => url('article/' . $article->getAttribute('id')),
                CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
            );
            curl_setopt_array($ch, $options);
            $result = curl_exec($ch);
            $this->log->info('推送文章至百度搜索引擎', json_decode($result, true));
        }
    }
}
