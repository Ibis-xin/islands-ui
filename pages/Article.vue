<template>
    <!-- https://ithelp.ithome.com.tw/articles/10304576 -->
    <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
            <!-- search bar -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">{{ filterType }}</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li v-for="(type, index) in filterTypes" :key="index">
                                <button class="dropdown-item" @click="() => {
                                    filterType = type;
                                    searchText = '';
                                    searchTexts = [];
                                }" type="button">{{ type }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <template v-if="filterType === filterTypes[1]">
                    <input @keydown.enter="() => {
                        const tag = searchText.replace(/ /g, '')
                        if (tag.length > 0 && searchTexts.findIndex(i => i === tag) === -1)
                            searchTexts.push(tag);
                        searchText = '';
                    }" v-model="searchText" type="text" class="form-control"
                        placeholder="輸入查詢 Tag (禁止輸入半形空白)，點擊 Enter 以鍵入" aria-label="Username"
                        aria-describedby="basic-addon1" />
                </template>
                <template v-else-if="filterType === filterTypes[2]">
                    <!-- <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <spen v-for="(t, i) in types" :key="i">
                            <input @focus="searchText = t" type="radio" class="btn-check" name="btnradio"
                                :id="`btnradio${i}`" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" :for="`btnradio${i}`">{{ t }}</label>
                        </spen>
                    </div> -->

                    <div style="width:60%; background-color: aliceblue;" class="dropdown">
                        <button style="width: 100%;" class="btn btn-outline-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">類型</button>
                        <ul style="width: 100%;" class="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li v-for="(t, i) in types" :key="i">
                                <button @click="searchText = t" class="dropdown-item" type="button">{{ t }}</button>
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <input v-model="searchText" type="text" class="form-control" placeholder="輸入查詢內容" aria-label="Username"
                        aria-describedby="basic-addon1" />
                </template>
            </div>
            <div v-if="filterType === filterTypes[1]">
                <span class="badge rounded-pill bg-secondary" v-for="tag in searchTexts" :key="tag">
                    {{ tag }}
                    <span @click="searchTexts.splice(searchTexts.findIndex(i => i === tag), 1)"
                        class="badge rounded-pill bg-secondary" style="cursor: pointer;" title="移除">x</span>
                </span>
            </div>
            <br />
            <!-- article list -->
            <main>
                <!-- where query is mongo query syntax: https://content.nuxtjs.org/api/composables/query-content -->
                <ContentQuery path="/article" :where="where">
                    <template #default="{ data }">
                        <div v-for="article in data" :key="article._path" class="card mb-3">
                            <NuxtLink class="nav-link" :to="article._path">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img :src="article.navImage" class="img-fluid rounded-start">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title">
                                                <span class="badge bg-secondary">
                                                    {{ article.type }}
                                                </span>
                                                {{ article.title }}
                                            </h3>
                                            <!-- <small class="text-muted"> {{ article.subtitle }}</small> -->
                                            <p class="card-text nav-description">
                                                {{ article.description }}
                                            </p>

                                            <p class="card-text">
                                                <span class="badge rounded-pill bg-secondary"
                                                    v-for="(tag, index) in article.tags" :key="index">
                                                    {{ tag }}
                                                </span>
                                                <br />
                                                <small class="text-muted d-flex justify-content-end">
                                                    Posted by&ensp;
                                                    <a href="#!">{{ article.author }}</a>
                                                    &ensp;on {{ new Date(article.updated).toDateString() }}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </template>
                    <template #not-found>
                        <p>No authors found.</p>
                    </template>
                </ContentQuery>
            </main>
            <!-- TODO 還缺一個分頁模組 -->
        </div>
    </div>
</template>
<script setup lang="ts">
const searchText = ref("")
const searchTexts = ref<string[]>([])

const filterTypes = ref(["標題", "Tag", "分類", "簡介"])
const types = ref(["type", "type1", "type2", "type3", "type4"])
const filterType = ref("標題")

const where = computed(() => {
    switch (filterType.value) {
        case filterTypes.value[0]:
            return { title: { $regex: searchText.value } }
        case filterTypes.value[1]:
            return { $and: searchTexts.value.map(i => ({ tags: { $regex: i } })) }
        case filterTypes.value[2]:
            return { type: searchText.value === "" ? { $regex: "" } : searchText.value }
        case filterTypes.value[3]:
            return { description: { $regex: searchText.value } }
        default:
            return { title: { $regex: searchText.value } }
    }
})
</script>
<style lang="scss" scoped>
.nav-description {
    // margin: 36px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>