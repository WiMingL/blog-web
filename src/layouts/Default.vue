<template>
  <div class="layout">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light"
         id="mainNav">
      <div class="container px-4 px-lg-5">
        <g-link class="navbar-brand"
                to="/">Start Bootstrap</g-link>
        <div role="navigation">
          <ul class="nav nav-pills">
            <li role="presentation">
              <g-link to="/"
                      class="nav-item"
                      exact
                      :class="{active: $route.name==='Home'}">Home
              </g-link>
            </li>
            <li role="presentation">
              <g-link to="/about"
                      class="nav-item"
                      exact
                      :class="{active: $route.name==='About'}">About
              </g-link>
            </li>
            <li role="presentation">
              <g-link to="/contact"
                      class="nav-item"
                      :class="{active: $route.name==='Contact'}">Contact
              </g-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <slot />
    <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.nav .nav-item {
  margin-left: 10px;
  padding: 0 10px;
  color: #ddd;
  font-weight: 600;
}

.nav .nav-item:hover {
  color: #fff;
}

.nav .active {
  color: #fff;
}
</style>
