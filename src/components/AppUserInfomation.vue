<template>
  <v-card>
    <v-row>
      <v-col>
        <v-avatar image="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-avatar>
      </v-col>
      <v-col>
        <v-card-title>使用者名稱</v-card-title>
        <v-card-subtitle>@account</v-card-subtitle>
      </v-col>
    </v-row>

    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-title @click="router.push({ name: routeName.userBackend })">
            個人設定
          </v-list-item-title>
          <v-list-item-title @click="router.push({ name: routeName.creation })">
            作品管理
          </v-list-item-title>
          <v-list-item-title>社群管理</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn>登出</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { routeName } from '@/router/routerValue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
