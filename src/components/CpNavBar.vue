<script setup lang="ts">
import { useRouter } from 'vue-router'

// 1. props-title and text
const props = defineProps<{
  title?: string
  rightText?: string
  back?: () => void
}>()
const emit = defineEmits<{
  (e: 'click-right'): void
}>()
// 2. emit
const onClickRight = () => {
  emit('click-right')
}
const router = useRouter()
// 3. history.state 
const onClickLeft = () => {
  if (props.back) return props.back()
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft"
    :title="title"
    :right-text="rightText"
    @click-right="onClickRight"
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      color: var(--cp-text1);
      font-size: 18px;
    }
    &__title {
      font-size: 15px;
    }
  }
}
</style>
