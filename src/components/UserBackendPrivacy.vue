<template>
  <v-container>
    <v-row align="end">
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <div v-if="!edit">
          <v-btn prepend-icon="mdi mdi-pencil" variant="outlined" size="small" @click="edit = true">
            編輯
          </v-btn>
        </div>
        <div v-if="edit">
          <v-btn prepend-icon="mdi mdi-close" variant="text" size="small" @click="edit = false">
            取消
          </v-btn>
          <v-btn prepend-icon="mdi mdi-content-save" variant="outlined" size="small"> 保存 </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table fixed-header>
          <thead>
            <tr>
              <th class="text-left">項目</th>
              <th class="text-left"><v-icon>mdi mdi-web</v-icon>公開</th>
              <th class="text-left"><v-icon>mdi mdi-lock-outline</v-icon>隱藏</th>
              <th class="text-left"><v-icon>mdi mdi-account-multiple</v-icon>僅對好友</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in privacy" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <v-checkbox v-model="item.privacy" value="public" :disabled="!edit"></v-checkbox>
              </td>
              <td>
                <v-checkbox
                  v-model="item.privacy"
                  value="privacy"
                  :disabled="!edit"
                  :indeterminate="item.privacy == null"
                ></v-checkbox>
              </td>
              <td>
                <v-checkbox v-model="item.privacy" value="friends" :disabled="!edit"></v-checkbox>
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
const privacy = ref<{ name: string; privacy?: string }[]>([
  {
    name: '創作者編號',
    privacy: 'public'
  },
  {
    name: '加入時間'
    // privacy: 'privacy'
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
    name: '作品累計字數'
    // privacy: 'friends'
  },
  {
    name: '作品累計圖片數'
    // privacy: 'friends'
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
    name: '累計餐與活動數'
    // privacy: 'public'
  },
  {
    name: '累計餐與討論數'
    // privacy: 'public'
  }
])
</script>
