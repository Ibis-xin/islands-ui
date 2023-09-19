<template>
  <v-container class="user-backend">
    <v-row>
      <v-col cols="12"> <slot name="info"></slot></v-col>
      <v-col cols="12"><UserCreationinfomation :info="props.info" /></v-col>
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

const props = defineProps<{ info: boolean }>()

const page = ref<number>(1)
</script>
