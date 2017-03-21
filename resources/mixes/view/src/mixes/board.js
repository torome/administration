export default function (injection) {
    Object.assign(injection, {
        board: {
            lists: [
                {
                    content: '<p></p>' +
                    '<p></p>' +
                    '',
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
            ],
            inject(data) {
                injection.board.lists.push(data);
            },
        },
    });
}
