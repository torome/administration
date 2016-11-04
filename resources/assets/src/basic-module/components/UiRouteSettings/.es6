export default {
  data: () => {
    return {
      model: {
        routers: ['bbs', 'we_chat', 'user'],
        defaultRouter: 'we_chat',
        mode: 'sub_domain',
        cookiesScope: '.aaa.com'
      },
      form: [
        {
          label: '文章',
          text: {
            value: 'bbs', placeholder: '请输入文章路由', validate: {required: {rule: true, message: '文章路由不能为空'}}, model: ''
          },
          radio: {label: '设为默认', value: 'bbs', model: ''}
        },
        {
          label: '微信',
          text: {
            value: 'wechat',
            placeholder: '请输入微信路由',
            validate: {required: {rule: true, message: '微信路由不能为空'}},
            model: ''
          },
          radio: {label: '设为默认', value: 'we_chat', model: ''}
        },
        {
          label: '用户',
          text: {
            value: 'user', placeholder: '请输入用户路由', validate: {required: {rule: true, message: '用户路由不能为空'}}, model: ''
          },
          radio: {label: '设为默认', value: 'user', model: ''}
        },
        {
          label: '模式',
          radioGroup: [
            {
              label: '子域名',
              value: 'sub_domain',
              validate: {required: {rule: true, message: '用户模式必须选择其中一种'}},
              model: ''
            },
            {
              label: '子目录',
              value: 'sub_directory',
              model: ''
            }
          ]
        },
        {
          label: 'cookies 作用域',
          text: {
            value: '.aaa.com',
            placeholder: '请输入 cookies 作用域',
            validate: {required: {rule: true, message: 'cookies 作用域不能为空'}},
            model: ''
          }
        }
      ],
    }
  },
  methods: {
    onSubmit: function () {

    }
  },
  created: function () {

    // this.ui.push({
    //   label: '文章',
    //   text: {
    //     value: 'bbs', placeholder: '请输入文章路由', validate: {required: {rule: true, message: '文章路由不能为空'}}
    //   },
    //   radio: {value: 'bbs', model: ''}
    // })
    //
    // this.ui.push({
    //   label: '微信',
    //   text: {
    //     value: 'bbs', placeholder: '请输入文章路由', validate: {required: {rule: true, message: '文章路由不能为空'}}
    //   },
    //   radio: {value: 'bbs', model: ''}
    // })
    //
    // this.ui.push({
    //   label: '用户',
    //   text: {
    //     value: 'bbs', placeholder: '请输入文章路由', validate: {required: {rule: true, message: '文章路由不能为空'}}
    //   },
    //   radio: {value: 'bbs', model: ''}
    // })


    this.$emit('bind', this.$data)
  }
}
