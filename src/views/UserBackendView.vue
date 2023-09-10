<template>
  <v-container class="user-backend">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="0">個人資料</v-tab>
        <v-tab value="1">作品管理</v-tab>
        <v-tab value="2">社群管理</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="0"> <UserForm /> </v-window-item>
          <v-window-item value="1"> Two </v-window-item>
          <v-window-item value="2"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserForm from '@/components/UserForm.vue'

const tab = ref<string>('0')
</script>
