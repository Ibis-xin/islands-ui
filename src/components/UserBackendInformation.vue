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
        <h1 v-if="!edit">使用者名稱</h1>
        <v-text-field
          v-if="edit"
          label="使用者名稱"
          hide-details="auto"
          variant="outlined"
          density="compact"
        ></v-text-field>
        @sinping328
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
          <v-btn prepend-icon="mdi mdi-close" variant="outlined" size="small" @click="edit = false">
            取消
          </v-btn>
          <v-btn prepend-icon="mdi mdi-content-save" size="small"> 保存 </v-btn>
        </div>
        <div v-if="showpassword">
          <v-btn
            prepend-icon="mdi mdi-close"
            variant="outlined"
            size="small"
            @click="showpassword = false"
          >
            取消
          </v-btn>
          <v-btn prepend-icon="mdi mdi-content-save" size="small"> 保存 </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
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
      <v-col cols="6" v-if="showpassword">
        <v-text-field label="變更密碼" hide-details="auto" variant="outlined" density="compact">
        </v-text-field>
      </v-col>
      <v-col cols="6" v-if="showpassword">
        <v-text-field label="再次確認密碼" hide-details="auto" variant="outlined" density="compact">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="!showpassword">
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-text-field
              label="創作者編號"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="加入時間"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              label="社群平台"
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              chips
              multiple
              :items="items"
            ></v-select>
            <!-- <v-text-field
              label="社群平台"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
            >
              <template v-slot:append-inner>
                <v-btn icon hide-details="auto" density="compact">
                  <v-icon> mdi-plus </v-icon>
                  <v-dialog v-model="dialog" activator="parent" width="auto">
                    <v-card>
                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-btn>
              </template>
            </v-text-field> -->
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row> </v-row>
        <v-row>
          <v-col
            ><v-text-field
              label="好友數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="粉絲數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="作品累計字數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="作品累計圖片數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="累計發起活動數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="累計發起討論數"
              readonly
              :disabled="!edit"
              hide-details="auto"
              variant="outlined"
              density="compact"
              :append-inner-icon="eye ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
              @click:append-inner="eye = !eye"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="!showpassword">
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
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const edit = ref<boolean>(false)
const showpassword = ref<boolean>(false)
const eye = ref<boolean>(false)

const items = ref<string[]>(['Plurk', 'Twitter', 'Facebook'])
</script>
