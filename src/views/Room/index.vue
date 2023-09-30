<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
import io, { Socket } from 'socket.io-client'
import { onMounted, onUnmounted } from 'vue'
import { baseURL } from '@/utils/request'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import type { Message, TimeMessages } from '@/types/room'
import { MsgType, OrderType } from '@/enums'
import { ref, nextTick, provide } from 'vue'
import type { ConsultOrderItem, Image } from '@/types/consult'
import { getConsultOrderDetail } from '@/services/consult'
// import dayjs from 'dayjs'
import { showToast } from 'vant'




const store = useUserStore()
const route = useRoute()

const list = ref<Message[]>([])
const initialMsg = ref(true)
let socket: Socket

onMounted(async () => {
  // 建立链接，创建 socket.io 实例
  socket = io(baseURL, {
    auth: {
      token: `Bearer ${store.user?.token}`
    },
    query: {
      orderId: route.query.orderId
    }
  })

  socket.on('connect', () => {
    // 建立连接成功
    console.log('connect')
  })

  socket.on('error', (event) => {
    // 错误异常消息
    console.log('error')
  })

  socket.on('disconnect', ()=> {
    // 已经断开连接
    console.log('disconnect')
  })
  
 
    // 聊天记录
    socket.on('chatMsgList', ({ data }: { data: TimeMessages[] }) => {
    // 准备转换常规消息列表
    const arr: Message[] = []
    data.forEach((item, i) => {
      arr.push({
        msgType: MsgType.Notify,
        msg: { content: item.createTime },
        createTime: item.createTime,
        id: item.createTime
      })
      arr.push(...item.items)
    })
    // 追加到聊天消息列表
    list.value.unshift(...arr)
  })


})

onUnmounted(() => {
  socket.close()
})





</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="Consultation Room" />
    <room-status></room-status>
    <room-message 
        v-for="item in list"
        :key="item.id"
        :item="item"></room-message>
    <room-action></room-action>
  </div>
</template>

<style lang="scss" scoped>
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>

