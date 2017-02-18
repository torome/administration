<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-02-18 17:06
 */
namespace Notadd\Administration\Handlers\Duoshuo;

use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Translation\Translator;
use Notadd\Content\Models\Comment;
use Notadd\Foundation\Passport\Abstracts\SetHandler;
use Notadd\Foundation\Setting\Contracts\SettingsRepository;

/**
 * Class BackupHandler.
 */
class BackupHandler extends SetHandler
{
    /**
     * @var \Notadd\Content\Models\Comment
     */
    protected $comment;

    /**
     * @var \Notadd\Foundation\Setting\Contracts\SettingsRepository
     */
    protected $settings;

    /**
     * BackupHandler constructor.
     *
     * @param \Illuminate\Container\Container                         $container
     * @param \Notadd\Content\Models\Comment                          $comment
     * @param \Illuminate\Http\Request                                $request
     * @param \Notadd\Foundation\Setting\Contracts\SettingsRepository $settings
     * @param \Illuminate\Translation\Translator                      $translator
     */
    public function __construct(
        Container $container,
        Comment $comment,
        Request $request,
        SettingsRepository $settings,
        Translator $translator
    ) {
        parent::__construct($container, $request, $translator);
        $this->comment = $comment;
        $this->settings = $settings;
    }

    /**
     * Data for handler.
     *
     * @return array
     */
    public function data()
    {
        return $this->settings->all()->toArray();
    }

    /**
     * Errors for handler.
     *
     * @return array
     */
    public function errors()
    {
        return [
            '修改设置失败！',
        ];
    }

    /**
     * Execute Handler.
     *
     * @return bool
     */
    public function execute()
    {
        $data = [];
        $id = $this->request->input('id');
        $page = 1;

        $this->fetch($data, $id, $page);

        foreach($data as $key => $value)
        {
            $isset = $this->comment->newQuery()->where('post_id',$value->post_id)->count();
            if(!$isset)
            {
                $data['log_id']         = '000000';
                $data['user_id']        = '0';
                $data['action']         = 'backups';
                $data['post_id']        = $value->post_id;
                $data['thread_id']      = $value->thread_id;
                $data['thread_key']     = '0';
                $data['author_id']      = '0';
                $data['author_name']    = $value->author->name;
                $data['author_email']   = '0';
                $data['author_url']     = $value->author->url;
                $data['author_key']     = '0';
                $data['ip']             = $value->ip?:'0';
                $data['created_at']     = $value->created_at;
                $data['message']        = $value->message;
                $data['parent_id']      = '0';
                $data['type']           = $value->type;
                $data['date']           = time();
                $this->comment->create($data);
            }
        }

        return true;
    }

    protected function fetch(&$data, $id, &$page) {
        $domain = $this->settings->get('duoshuo.domain');

        $ch = curl_init();
        $options =  array(
            CURLOPT_URL => "http://api.duoshuo.com/threads/listPosts.json?order=asc&thread_key={$id}&short_name={$domain}&page={$page}&limit=10",
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
        );
        curl_setopt_array($ch, $options);
        $result = json_decode(curl_exec($ch), true);
        $tmp = [];
        foreach($result['response'] as $key => $item)
        {
            $tmp[$key] = $result['parentPosts'][$item];
        }
        $data = array_merge($tmp, $data);
        if (count($tmp)) {
            $page = $page + 1;
            $this->fetch($data, $id, $page);
        }
    }

    /**
     * Messages for handler.
     *
     * @return array
     */
    public function messages()
    {
        return [
            '修改设置成功!',
        ];
    }
}
