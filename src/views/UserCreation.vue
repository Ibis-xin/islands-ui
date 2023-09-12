<template>
  <v-container class="user-backend">
    <v-card>
      <div v-if="!open">
        <v-card-title>作品管理</v-card-title>
        <v-card-subtitle>作品列表</v-card-subtitle>
      </div>

      <v-card-text>
        <v-row>
          <v-col v-if="!open">
            <v-table fixed-header>
              <thead>
                <tr>
                  <th class="text-left">作品名稱</th>
                  <th class="text-left">類型</th>
                  <th class="text-left">權限</th>
                  <th class="text-left">發表時間</th>
                  <th class="text-left">更新時間</th>
                  <th class="text-left">功能</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in creation" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>
                    {{ item.category }}
                  </td>
                  <td>
                    {{ item.privacy }}
                  </td>
                  <td>
                    {{ item.createTime }}
                  </td>
                  <td>
                    {{ item.updateTime }}
                  </td>
                  <td>
                    <v-btn @click="edit = true">編輯</v-btn>
                    <v-btn>檢視</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
          <v-col v-if="edit">
            <v-row>
              <v-col cols="12">
                <v-toolbar>
                  <v-btn icon @click="openCreation()">
                    <v-icon>
                      {{ open ? 'mdi mdi-arrow-left' : 'mdi mdi-arrow-top-left-bottom-right' }}
                    </v-icon>
                    <v-tooltip activator="parent" location="bottom">
                      {{ open ? '返回側欄模式' : '展開' }}
                    </v-tooltip>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi mdi-content-save</v-icon>
                    <v-tooltip activator="parent" location="bottom">保存</v-tooltip>
                  </v-btn>
                  <v-btn icon @click="cancel()">
                    <v-icon>mdi mdi-close</v-icon>
                    <v-tooltip activator="parent" location="bottom">取消</v-tooltip>
                  </v-btn>
                </v-toolbar>
              </v-col>
            </v-row>
            <v-row v-if="info">
              <v-col cols="auto">
                <v-img
                  :width="300"
                  :aspect-ratio="3 / 4"
                  cover
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="作品名稱"
                      hide-details="auto"
                      variant="outlined"
                      density="compact"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      label="類型"
                      :items="['短篇小說', '長篇小說', '新詩', '日誌', '部落格']"
                      hide-details="auto"
                      variant="outlined"
                      density="compact"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      label="權限"
                      :items="['公開', '隱藏', '僅限好友']"
                      hide-details="auto"
                      variant="outlined"
                      density="compact"
                      no-resize
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="簡介" hide-details="auto" variant="outlined"></v-textarea>
                  </v-col>
                  <v-col>
                    <v-card-subtitle>發布時間：</v-card-subtitle>
                    <v-card-subtitle>最後更新時間：</v-card-subtitle>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                    <v-btn @click="info = false">
                      <v-icon>mdi mdi-arrow-up-drop-circle</v-icon> 隱藏作品資訊
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="10" v-if="!info">
                <v-text-field
                  label="作品名稱"
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                >
                </v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn v-if="!info" @click="info = true">
                  <v-icon>mdi mdi-arrow-down-drop-circle</v-icon>
                  顯示作品資訊
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-textarea label="內容" hide-details="auto" variant="outlined"></v-textarea>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const edit = ref<boolean>(false)
const open = ref<boolean>(false)
const info = ref<boolean>(true)

const creation = ref<
  {
    name: string
    category: string
    privacy: string
    createTime: string
    updateTime: string
  }[]
>([
  {
    name: '最偉大的作品',
    category: '新詩',
    privacy: '公開',
    createTime: '2023/09/12',
    updateTime: '2023/09/12'
  },
  {
    name: '喜羊羊與灰太狼',
    category: '繪本',
    privacy: '僅限好友',
    createTime: '2023/09/12',
    updateTime: '2023/09/12'
  }
])

function openCreation() {
  open.value = !open.value

  if (open.value) {
    info.value = false
  } else {
    info.value = true
  }
}

function cancel() {
  edit.value = false
  open.value = false
}
</script>
