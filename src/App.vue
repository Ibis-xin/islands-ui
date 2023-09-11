<template>
  <v-app>
    <v-app-bar color="teal-darken-4">
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

      <v-tooltip location="bottom" text="新增作品">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip location="bottom" text="私訊">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-badge color="#ef4c60" dot>
              <v-icon>mdi mdi-message</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip location="bottom" text="通知">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-badge color="#ef4c60" dot>
              <v-icon>mdi mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-tooltip>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon> mdi mdi-account </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="router.push({ name: routeName.userBackend })">
              個人資料
            </v-list-item-title>
            <v-list-item-title>隱私權管理</v-list-item-title>
            <v-list-item-title>作品管理</v-list-item-title>
            <v-list-item-title>社群管理</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
