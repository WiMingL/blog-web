<template>
  <Layout>

    <!-- Page Header-->
    <header class="masthead"
            style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Vimin</h1>
              <span class="subheading">文章、学习、成长、记录</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview"
               v-for="edge in $page.articles.edges"
               :key="edge.node.id">
            <g-link :to="`/article/${edge.node.id}`">
              <h2 class="post-title">{{ edge.node.title }}</h2>
              <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <g-link to="/">{{ edge.node.creator.username }}</g-link>
              on {{ format(edge.node.created_at) }}
            </p>
            <p>
              <g-link v-for="tag in edge.node.tags"
                      :key="tag.id"
                      :style="{
                        marginRight: '10px'
                      }"
                      :to="`/tag/${tag.id}`">
                {{tag.name}}
              </g-link>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Divider-->

          <!-- Pager-->
          <Pager :info="$page.articles.pageInfo" />
          <!-- <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase"
               href="#!">Older Posts →</a></div> -->
        </div>
      </div>
    </div>

  </Layout>
</template>

// 使用分页配置来将数据进行分页
<page-query>
query($page: Int) {
  articles: allStrapiArticle(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
     	node {
        id
        title
        created_at
        creator {
          id
          username
        }
        cover {
          url
        }
        tags {
          id
          name
        }
  		}
  	}
	}
}
</page-query>

<script>
// 引入分页组件
import { Pager } from 'gridsome'
import moment from 'moment'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  },
  methods: {
    format(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
