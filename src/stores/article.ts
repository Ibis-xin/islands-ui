import type { Article } from '@/models/article'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [
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
    ] as Article[],
    article: {} as Article
  })
})
