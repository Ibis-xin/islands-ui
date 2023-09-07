<template>
    <!-- https://ithelp.ithome.com.tw/articles/10303495 -->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="lh-lg">
                        <slot />
                    </div>

                    <div class="d-flex justify-content-end mb-4">
                        <span class="btn btn-primary text-uppercase" @click="router.back()">Back →</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script setup lang="ts">
const router = useRouter();
</script>