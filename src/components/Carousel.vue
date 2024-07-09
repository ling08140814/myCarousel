<template>
  <div class="carousel-wrap">
    <div 
      class="carousel"
      @mouseover="clearTimer"
      @mouseout="autoShow"
    >
      <div
        v-for="(item, index) in list"
        :key="'content_' + index"
        :class="{'active' : index === curIndex}"
        class="carousel-item"
      >
        <span>{{ item.content }}</span>
      </div>
      <div class="dots">
        <div
          v-for="(item, idx) in list"
          :key="'dot_' + idx"
          :class="{'active-dot' : idx === curIndex}"
          @click="onClickDot(idx)"
        ></div>
      </div>
      <div
        class="arrow left-arrow"
        @click="onClickArrow('left')"
        v-if="curIndex !== 0"
      ></div>
      <div
        class="arrow right-arrow"
        @click="onClickArrow('right')"
        v-if="curIndex !== list.length - 1"
      ></div>
    </div>
    <div class="footer">
      {{ title || '轮播图示例' }}
    </div>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from "vue"
  const props = defineProps({
    title: String, // footer标题
    list: Array, // 轮播列表
    speed: {
      // 轮播时间间隔
      type: Number,
      default: 1
    },
    initialIndex: {
      // 初始下标，超过列表长度时，赋值为0
      type: Number,
      default: 0
    },
    autoPlay: {
      // 是否自动切换
      type: Boolean,
      default: true
    }
  })
  const {
    title,
    list,
    speed,
    initialIndex,
    autoPlay
  } = props
  const curIndex = ref(0)
  const autoShowTimer = ref(null)

  watchEffect(() => {
    curIndex.value = initialIndex >= list.length ? 0 : initialIndex
  })

  const clearTimer = () => {
    clearInterval(autoShowTimer.value)
  }

  const onClickArrow = (direction) => {
    clearTimer()
    if (direction === 'left') {
      curIndex.value--
    } else {
      curIndex.value++
    }
    autoShow()
  }

  const onClickDot = (idx) => {
    clearTimer()
    curIndex.value = idx
    autoShow()
  }

  const autoShow = () => {
    if (!autoPlay) return
    clearTimer()
    autoShowTimer.value = setInterval(() => {
      if (curIndex.value < list.length - 1) {
        curIndex.value++
      } else {
        curIndex.value = 0
      }
    }, speed)
  }

  autoShow()
</script>

<style lang="scss" scoped>
.carousel-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .carousel {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .carousel-item {
      display: none;
      font-size: 24px;
      font-weight: 500;
      transition: all .3s ease;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      &:nth-child(4n) {
        background: #66CC99;
      }
      &:nth-child(4n + 1) {
        background: #FF6666;
      }
      &:nth-child(4n + 2) {
        background: #FF9966;
      }
      &:nth-child(4n + 3) {
        background: #FFFF99;
      }
    }
    .active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dots {
      position: absolute;
      bottom: 30px;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #1577FF;
        opacity: 0.6;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
      .active-dot {
        opacity: 1;
      }
    }
    .arrow {
      position: absolute;
      width: 64px;
      height: 64px;
      background: url('@/assets/arrow.png');
      z-index: 10;
    }
    .left-arrow {
      left: 30px;
    }
    .right-arrow {
      right: 30px;
      rotate: 180deg;
    }
  }
  .footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    font-size: 18px;
  }
}
</style>