<template>
  <v-row>
    <v-col cols="auto">
      <v-img
        :width="300"
        :aspect-ratio="3 / 4"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      />
    </v-col>
    <v-col>
      <v-row>
        <v-col cols="6">
          <v-select
            label="類型"
            :items="['短篇小說', '長篇小說', '新詩', '日誌', '部落格']"
            hide-details="auto"
            variant="outlined"
            density="compact"
          />
        </v-col>
        <v-col cols="6">
          <v-select
            label="權限"
            :items="['公開', '隱藏', '僅限好友']"
            hide-details="auto"
            variant="outlined"
            density="compact"
            no-resize
          />
        </v-col>
        <v-col cols="12">
          <v-textarea label="簡介" hide-details="auto" variant="outlined" />
        </v-col>
        <v-col>
          <v-card-subtitle>發布時間：</v-card-subtitle>
          <v-card-subtitle>最後更新時間：</v-card-subtitle>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
