<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-02-18 16:37
 */
namespace Notadd\Administration\Handlers\Duoshuo;

use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Translation\Translator;
use Notadd\Content\Models\Article;
use Notadd\Content\Models\Comment;
use Notadd\Foundation\Passport\Abstracts\DataHandler;

/**
 * Class NumberHandler.
 */
class NumberHandler extends DataHandler
{
    /**
     * @var \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    protected $pagination;

    /**
     * NumberHandler constructor.
     *
     * @param \Notadd\Content\Models\Comment     $comment
     * @param \Illuminate\Container\Container    $container
     * @param \Illuminate\Http\Request           $request
     * @param \Illuminate\Translation\Translator $translator
     */
    public function __construct(
        Comment $comment,
        Container $container,
        Request $request,
        Translator $translator
    ) {
        parent::__construct($container, $request, $translator);
        $this->model = $comment;
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
        $list = Article::all('id');

        return [
            'list' => $list->toArray(),
            'number' => $list->count(),
        ];
    }

    /**
     * Errors for handler.
     *
     * @return array
     */
    public function errors()
    {
        return [
            $this->translator->trans('获取文章数量失败！'),
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
            $this->translator->trans('获取文章数量成功！'),
        ];
    }
}
