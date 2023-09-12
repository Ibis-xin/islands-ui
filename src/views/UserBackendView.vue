<template>
  <v-container class="user-backend">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="0">個人資料</v-tab>
        <v-tab value="1">隱私權管理</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="0"> <UserBackendInformation /> </v-window-item>
          <v-window-item value="1"> <UserBackenbPrivacy /> </v-window-item>
          <v-window-item value="2"> 作品管理 </v-window-item>
          <v-window-item value="3"> 社群管理 </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserBackendInformation from '@/components/UserBackendInformation.vue'
import UserBackenbPrivacy from '@/components/UserBackenbPrivacy.vue'

const tab = ref<string>('0')
</script>
