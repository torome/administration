import {UiView} from 'components'

export default {
  components: {UiView},
  data: () => {
    return {
      menu: [
        {
          text: '全局设置',
          icon: 'fa fa-circle-o',
          uri: '/'
        },
        {
          text: '附件設置',
          icon: 'fa fa-circle-o',
          uri: '#',
          menu: [
            {
              text: '上传设置',
              icon: 'fa fa-circle-o',
              uri: '/upload'
            },
            {
              text: '存储设置',
              icon: 'fa fa-circle-o',
              uri: '/storage'
            },
            {
              text: '水印设置',
              icon: 'fa fa-circle-o',
              uri: '/watermark'
            },
            {
              text: 'CDN 设置',
              icon: 'fa fa-circle-o',
              uri: '/cdn'
            },
            {
              text: '模块管理',
              icon: 'fa fa-circle-o',
              uri: '/module'
            }
          ]
        },
        {
          text: '导航栏',
          icon: 'fa fa-circle-o',
          uri: '/navbar'
        },
        {
          text: 'SEO 设置',
          icon: 'fa fa-circle-o',
          uri: '/seo'
        },
        {
          text: '站点地图',
          icon: 'fa fa-circle-o',
          uri: '/sitemap'
        },
        {
          text: '邮件设置',
          icon: 'fa fa-circle-o',
          uri: '/email'
        },
        {
          text: '伪静态设置',
          icon: 'fa fa-circle-o',
          uri: '/rewrite'
        },
        {
          text: '路由设置',
          icon: 'fa fa-circle-o',
          uri: '/route'
        },
        {
          text: '调试工具',
          icon: 'fa fa-circle-o',
          uri: '/debug'
        },
        {
          text: '数据库管理',
          icon: 'fa fa-circle-o',
          uri: '/database'
        }
      ]
    }
  },
  methods: {
    onBind: function (data) {
      console.log('bind')
      console.log(data)
    }
  }
}