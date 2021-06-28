// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 引入 css 相关资源，与课程里面不同，新版的 clean-blog 在 style.css 中集成了相关的css内容，不要添加 bootstrap
import './assets/css/index.css'

import DefaultLayout from '~/layouts/Default.vue'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
