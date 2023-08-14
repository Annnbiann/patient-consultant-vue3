<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { userUserStore } from './stores'
const store = useUserStore()
</script>

<template>
  <div>App{{  store.user  }}
    <van-button type="primary" @click="store.setUser({
    id:'1',
    avatar:'1',
    token:'1', 
    mobile:'1',
    account:'1'})">log in</van-button>

  </div>
</template>
