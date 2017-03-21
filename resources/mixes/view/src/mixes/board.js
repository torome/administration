export default function (injection) {
    Object.assign(injection, {
        board: {
            lists: [
                {
                    content: '<p><strong>开发团队：</strong>' +
                        '<a href="https://github.com/twilroad" target="_blank">寻风</a>，' +
                        '<a href="https://www.zuohuadong.cn" target="_blank">依剑听雨</a>，' +
                        '<a href="https://github.com/medz" target="_blank">Seven Du</a>，' +
                        '<a href="https://github.com/QiyueShiyi" target="_blank">Luff</a>，' +
                        '<a href="https://weibo.com/u/2181906365" target="_blank">小莫</a>，' +
                        '<a href="https://weibo.com/u/3189357545" target="_blank">睡不醒的酸柠檬</a>，' +
                        '<a href="http://weibo.com/u/3854583077" target="_blank">浅殤</a>，' +
                        '<a href="https://weibo.cn/u/3258236872/" target="_blank">马镝清同学</a>，' +
                        '<a href="http://weibo.com/u/5592753739" target="_blank">未央花事结</a>' +
                    '</p>' +
                    '<p><strong>鸣谢：</strong>' +
                        '<a href="https://github.com/LitoMore" target="_blank">LitoMore</a>，' +
                        '<a href="https://github.com/ganlanshu0211" target="_blank">半缕阳光</a>，' +
                        '<a href="https://github.com/ToxinSting" target="_blank">Rayle</a>，' +
                        '<a href="https://github.com/cloudsher" target="_blank">cloudSher</a>' +
                        '<a href="http://www.lovetd.cn" target="_blank">怒杀一只鸡</a>' +
                    '</p>',
                    span: 12,
                    title: '开发团队',
                    type: 'html',
                },
                {
                    content: '这是 Button 文本内容',
                    link: 'http://www.hao123.com',
                    span: 12,
                    theme: 'primary',
                    title: '这是 Button 标题',
                    type: 'button',
                },
                {
                    content: '这是 Text 文本内容',
                    span: 12,
                    title: '这是 Text 标题',
                    type: 'text',
                },
                {
                    content: '这是 Html 文本内容',
                    span: 12,
                    title: '这是 Html 标题',
                    type: 'html',
                },
                {
                    content: {
                        title: {
                            text: 'Notadd 图标测试',
                        },
                        tooltip: {},
                        xAxis: {
                            data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks'],
                        },
                        yAxis: {},
                        series: [
                            {
                                name: 'Sales',
                                type: 'bar',
                                data: [5, 20, 36, 10, 10, 20],
                            },
                        ],
                    },
                    span: 12,
                    style: 'height: 300px;',
                    title: '这是 Chart 标题',
                    type: 'chart',
                },
            ],
            inject(data) {
                injection.board.lists.push(data);
            },
        },
    });
}
