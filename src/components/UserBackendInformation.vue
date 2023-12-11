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
        <v-row>
          <v-col cols="12">
            <h1 v-if="!edit">使用者名稱</h1>
            <v-text-field
              v-if="edit"
              label="使用者名稱"
              hide-details="auto"
              variant="outlined"
              density="compact"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <p>@account</p>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <div v-if="!edit && !showpassword">
          <v-btn prepend-icon="mdi mdi-pencil" variant="outlined" size="small" @click="edit = true">
            編輯
          </v-btn>
          <v-btn
            prepend-icon="mdi mdi-key"
            variant="outlined"
            size="small"
            @click="showpassword = true"
          >
            修改密碼
          </v-btn>
        </div>
        <div v-if="edit">
          <v-btn prepend-icon="mdi mdi-close" variant="text" size="small" @click="edit = false">
            取消
          </v-btn>
          <v-btn
            prepend-icon="mdi mdi-content-save"
            variant="outlined"
            size="small"
            @click="changeInfo()"
          >
            保存
          </v-btn>
        </div>
        <div v-if="showpassword">
          <v-btn
            prepend-icon="mdi mdi-close"
            variant="text"
            size="small"
            @click="showpassword = false"
          >
            取消
          </v-btn>
          <v-btn
            prepend-icon="mdi mdi-content-save"
            variant="outlined"
            size="small"
            @click="changePassword()"
          >
            保存
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <UserBackendPassword v-if="showpassword"></UserBackendPassword>

    <v-row v-if="!showpassword">
      <v-col cols="12">
        <v-text-field
          label="註冊信箱"
          :readonly="!edit"
          hide-details="auto"
          variant="outlined"
          density="compact"
        >
          <template v-slot:append-inner>
            <v-chip prepend-icon="mdi mdi-check" color="green">已驗證</v-chip>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" v-if="edit">
        <v-text-field
          label="新增社群平台"
          :readonly="!edit"
          hide-details="auto"
          variant="outlined"
          density="compact"
        >
          <template v-slot:prepend-inner>
            <v-icon>mdi mdi-help-circle</v-icon>
          </template>
          <template v-slot:append-inner>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props">mdi mdi-arrow-down-drop-circle</v-icon>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in community" :key="index">
                  <v-list-item-title>{{ item.platform }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-slot:append>
            <v-icon @click="addCommunity()">mdi mdi-plus</v-icon>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="6" v-for="(item, index) in community" :key="index">
        <v-text-field
          :label="item.platform"
          :readonly="!edit"
          hide-details="auto"
          variant="outlined"
          density="compact"
        >
          <template v-slot:prepend-inner>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <template v-if="edit" v-slot:append>
            <v-icon @click="delCommunity()">mdi mdi-trash-can-outline</v-icon>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          label="關於我"
          :readonly="!edit"
          no-resize
          hide-details="auto"
          variant="outlined"
          density="compact"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <div>加入時間：2023/12/11</div>
        <div>上次登入時間：2023/12/11</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UserBackendPassword from './UserBackendPassword.vue'

const edit = ref<boolean>(false)
const showpassword = ref<boolean>(false)

const community = ref<{ platform: string; icon: string }[]>([
  { platform: 'Facebook', icon: 'mdi mdi-facebook' },
  { platform: 'Instagram', icon: 'mdi mdi-instagram' },
  { platform: 'Twitter', icon: 'mdi mdi-twitter' },
  { platform: 'Youtube', icon: 'mdi mdi-youtube' }
])

function addCommunity() {
  console.log('Add Community')
}

function delCommunity() {
  console.log('Delete Community')
}

function changeInfo() {
  console.log('Change Information')
}

function changePassword() {
  console.log('Change Password')
}
</script>
