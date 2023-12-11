<template>
  <v-container class="user-backend">
    <v-row v-if="!open">
      <v-col>
        <h1>作品管理</h1>
        <v-spacer></v-spacer>
        <v-btn class="end">新增</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="!open">
        <h2>作品列表</h2>
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
            <tr v-for="item in article.articles" :key="item.name">
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
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserCreationEditer from '@/components/UserCreationEditer.vue'
import { useArticleStore } from '@/stores/article'

const edit = ref<boolean>(false)
const open = ref<boolean>(false)
const info = ref<boolean>(true)

const article = useArticleStore()

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
