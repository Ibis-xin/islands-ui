<template>
  <div class="container-fluid">
    <!-- Navigation-->
   
    <header v-if="showHeader" class="masthead">
     <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <span class="navbar-brand" href="index.html">
          <NuxtLink class="nav-link" to="/">Islands</NuxtLink>
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i
            class="fas fa-bars"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li v-for="item in menu" :key="item.to" class="nav-item">
              <NuxtLink class="nav-link" :to="item.to">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    <NuxtPage />
    <footer class="container-footer">
        <div class="row justify-content-center">
          <div class="col">
            <div class="small text-center text-muted fst-italic">Copyright &copy; 2023 islands</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import articleBg from "/img/article-bg.jpg";
import homeBg from "/img/home-bg.jpg";
import contactBg from "/img/contact-bg.jpg";
import caseBg from "/img/case-bg.jpg";

// import img from "~/assets/img/about-bg.jpg";

const route = useRoute()

const showHeader = computed(() => {
  const pathGroup = route.fullPath.split("/")
  return pathGroup.length < 3 || (pathGroup[pathGroup.length - 1] ?? '').length == 0
})

const menu = ref<{
  to: string
  title: string
}[]>([
  {
    to: "/",
    title: "首頁"
  },
  {
    to: "/Case",
    title: "服務案例"
  },
  {
    to: "/Article",
    title: "專題文章"
  },
  {
    to: "/Contact",
    title: "聯繫我們"
  },
])

const heading = computed(() => {
  switch (route.fullPath.replaceAll("/", "")) {
    case "Article":
      return {
        title: "RPAi",
        subTitle: "讓我們一起從簡單開始，成就不簡單！",
        backgroundImage: articleBg
      }
    case "Contact":
      return {
        title: "RPA 流程開發需求 & 異業合作邀約",
        subTitle: " 你和你的企業有 RPA 流程開發需求嗎？或是你想與 RPA 數位優化器合作或提供回饋嗎？",
        backgroundImage: contactBg
      }

    case "Case":
      return {
        title: "RPAi",
        subTitle: "讓我們一起從簡單開始，成就不簡單！",
        backgroundImage: caseBg
      }
    default:
      return {
        title: "RPAi",
        subTitle: "讓我們一起從簡單開始，成就不簡單！",
        backgroundImage: homeBg
      }
  }
})

</script>