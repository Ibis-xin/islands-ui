<template>
  <v-container>
    <v-row align="end">
      <v-col cols="auto">
        <v-img
          class="bg-white"
          width="120"
          :aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          cover
        >
        </v-img>
      </v-col>
      <v-col>
        <h1>使用者名稱</h1>
        @sinping328
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <div v-if="!edit">
          <v-btn prepend-icon="mdi mdi-pencil" variant="outlined" size="small" @click="edit = true">
            編輯
          </v-btn>
        </div>
        <div v-if="edit">
          <v-btn prepend-icon="mdi mdi-close" variant="outlined" size="small" @click="edit = false">
            取消
          </v-btn>
          <v-btn prepend-icon="mdi mdi-content-save" size="small"> 保存 </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table fixed-header>
          <thead>
            <tr>
              <th class="text-left">項目</th>
              <th class="text-left">公開</th>
              <th class="text-left">隱藏</th>
              <th class="text-left">僅對好友</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in privacy" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <v-checkbox v-model="item.privacy" value="public" :readonly="!edit"></v-checkbox>
              </td>
              <td>
                <v-checkbox v-model="item.privacy" value="privacy" :readonly="!edit"></v-checkbox>
              </td>
              <td>
                <v-checkbox v-model="item.privacy" value="friends" :readonly="!edit"></v-checkbox>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const edit = ref<boolean>(false)
const privacy = ref<{ name: string; privacy: string }[]>([
  {
    name: '創作者編號',
    privacy: 'public'
  },
  {
    name: '加入時間',
    privacy: 'privacy'
  },
  {
    name: '好友數',
    privacy: 'friends'
  },
  {
    name: '粉絲數',
    privacy: 'public'
  },
  {
    name: '作品累計字數',
    privacy: 'friends'
  },
  {
    name: '作品累計圖片數',
    privacy: 'friends'
  },
  {
    name: '累計發起活動數',
    privacy: 'privacy'
  },
  {
    name: '累計發起討論數',
    privacy: 'privacy'
  },
  {
    name: '累計餐與活動數',
    privacy: 'public'
  },
  {
    name: '累計餐與討論數',
    privacy: 'public'
  }
])
</script>
