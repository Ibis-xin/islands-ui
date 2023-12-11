<template>
  <v-container class="user-backend">
    <v-row>
      <v-col>
        <h1>個人設定</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-tabs v-model="tab">
            <v-tab value="0">個人資料</v-tab>
            <v-tab value="1">統計資料</v-tab>
            <v-tab value="2">隱私權管理</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="0"> <UserBackendInformation /> </v-window-item>
              <v-window-item value="1"> <UserBackendCount /> </v-window-item>
              <v-window-item value="2"> <UserBackenbPrivacy /> </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserBackendInformation from '@/components/UserBackendInformation.vue'
import UserBackendCount from '@/components/UserBackendCount.vue'
import UserBackenbPrivacy from '@/components/UserBackendPrivacy.vue'

const tab = ref<string>('0')
</script>
