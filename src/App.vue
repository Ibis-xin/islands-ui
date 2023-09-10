<template>
  <v-app>
    <v-app-bar color="teal-darken-4" >
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon icon="mdi mdi-island"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        <router-link :to="'/'">islands</router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="router.push({ name: routeName.userBackend })"
        ><v-icon>mdi mdi-book-heart</v-icon>
      </v-btn>

      <v-btn icon @click="router.push({ name: routeName.userBackend })">
        <v-icon>mdi mdi-forum</v-icon>
      </v-btn>

      <v-btn icon @click="router.push({ name: routeName.userBackend })">
        <v-icon>mdi mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>
      <v-row class="align-sm-center ma-0">
        <v-col cols="12">
          <div class="footer-copyright">Copyright © 2023 islands.</div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { routeName } from './router/routerValue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
