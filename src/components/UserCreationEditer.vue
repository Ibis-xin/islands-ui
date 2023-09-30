<template>
  <v-container class="user-backend">
    <v-row>
      <v-col cols="12">
        <v-toolbar>
          <v-btn icon @click="$emit('openCreation')">
            <v-icon>
              {{ props.open ? 'mdi mdi-arrow-left' : 'mdi mdi-arrow-top-left-bottom-right' }}
            </v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ props.open ? '返回側欄模式' : '展開' }}
            </v-tooltip>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi mdi-content-save</v-icon>
            <v-tooltip activator="parent" location="bottom">保存</v-tooltip>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi mdi-upload</v-icon>
            <v-tooltip activator="parent" location="bottom">發布</v-tooltip>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi mdi-update</v-icon>
            <v-tooltip activator="parent" location="bottom">更新</v-tooltip>
          </v-btn>
          <v-btn icon @click="$emit('cancel')">
            <v-icon>mdi mdi-close</v-icon>
            <v-tooltip activator="parent" location="bottom">取消</v-tooltip>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10">
        <v-text-field label="作品名稱" hide-details="auto" variant="outlined" density="compact" />
      </v-col>
      <v-col cols="2">
        <v-btn @click="$emit('openInfo')">
          <v-icon>
            {{ info ? 'mdi mdi-arrow-up-drop-circle' : 'mdi mdi-arrow-down-drop-circle' }}
          </v-icon>
          {{ info ? '隱藏作品資訊' : '顯示作品資訊' }}
        </v-btn>
      </v-col>
      <v-col v-if="props.info" cols="12"><UserCreationinfomation /></v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-text-field label="章節數" hide-details="auto" variant="outlined" density="compact" />
      </v-col>
      <v-col cols="8">
        <v-text-field label="章節標題" hide-details="auto" variant="outlined" density="compact" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea label="內容" hide-details="auto" variant="outlined" />
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="page" :length="15" :total-visible="5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import UserCreationinfomation from '@/components/UserCreationinfomation.vue'
import { ref } from 'vue'

const props = defineProps<{
  open: boolean
  info: boolean
}>()

const page = ref<number>(1)
</script>
