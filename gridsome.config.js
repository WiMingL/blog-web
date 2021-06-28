// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    // 将 strapi 中的数据导入到 gridsome 中
    use: '@gridsome/source-strapi',
    options: {
      // 接入的 api 地址
      apiURL: 'http://106.75.153.104:1337',
      queryLimit: 1000, // Defaults to 100
      // 需要导入的 contentTypes，对应strapi 中的 content type
      contentTypes: ['article', 'tag'],
      // singleTypes: ['impressum'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }],
  templates: {
    StrapiArticle: [{
      path: '/article/:id',
      component: './src/templates/Article.vue'
    }],
    StrapiTag: [{
      path: '/tag/:id',
      component: './src/templates/Tag.vue'
    }]
  }
}
