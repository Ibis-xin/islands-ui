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
                  <th class="text-left">最後更新時間</th>
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
                    <v-btn>{{ item.release ? '檢視' : '發布' }}</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
          <v-col v-if="edit">
            <UserCreationEditer
              :open="open"
              :info="info"
              @open-creation="openCreation()"
              @open-info="openInfo()"
              @cancel="cancel()"
            >
            </UserCreationEditer>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserCreationEditer from '@/components/UserCreationEditer.vue'

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
    release: boolean
  }[]
>([
  {
    name: '最偉大的作品',
    category: '新詩',
    privacy: '公開',
    createTime: '2023/09/12',
    updateTime: '2023/09/12',
    release: true
  },
  {
    name: '喜羊羊與灰太狼',
    category: '繪本',
    privacy: '僅限好友',
    createTime: '2023/09/12',
    updateTime: '2023/09/12',
    release: false
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

function openInfo() {
  info.value = !info.value
}

function cancel() {
  edit.value = false
  open.value = false
}
</script>
