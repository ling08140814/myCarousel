<template>
  <div>
    <Carousel
      class="carousel"
      :list="list"
      :speed="2000"
    ></Carousel>
  </div>
</template>

<script setup>
  import Carousel from "@/components/Carousel.vue"
  import { httpGet } from "@/utils/axios.js"
  import { ref } from "vue"
  const list = ref([])
  const count = ref(4)

  const getList = () => {
    for (let i = 0; i < count.value; i++) {
      httpGet('/all.json').then((res) => {
        list.value.push({
          content: res?.content || ''
        })
      })
      .catch(() => {
      })
      .finally(() => {
      })
    }
  }

  getList()

</script>

<style lang="scss" scoped>
.carousel {
  width: 80vw;
  height: 60vh;
}
</style>