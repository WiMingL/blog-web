<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"
            style="background-image: url('/img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.article.title }}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <span class="meta">
                Posted by
                <a href="#!">{{ $page.article.creator.username }}</a>
                on {{ $page.article.created_at }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7"
               v-html="formatHtml($page.article.content)">

          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  article: strapiArticle(id: $id) {
    id
    title
    created_at
    content
    cover {
      url
    }
    creator {
      id
      username
    }
    tags {
      id
      name
    }
	}
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default {
  name: 'Article',
  methods: {
    formatHtml(content) {
      return md.render(content)
    }
  }
}
</script>

<style>
</style>