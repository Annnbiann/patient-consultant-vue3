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


// const consult = ref<ConsultOrderItem>()
//   const loadConsult = async () => {
//   const res = await getConsultOrderDetail(route.query.orderId as string)
//   consult.value = res.data
// }

const store = useUserStore()
const route = useRoute()

const list = ref<Message[]>([])
// const initialMsg = ref(true)
let socket: Socket

onMounted(async () => {
  // loadConsult()
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
  
  socket.on('disconnect', ()=> {
    // 已经断开连接
    console.log('disconnect')
  })

  // socket.on('error', () => {
  //   // 错误异常消息
  //   console.log('error')
  // })
  
    // 聊天记录
  socket.on('chatMsgList', ({ data }: { data: TimeMessages[] }) => {
    // 准备转换常规消息列表
    const arr: Message[] = []
    data.forEach((item) => {
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
    console.log(list)
  })


  // 监听订单状态变化
  // socket.on('statusChange', () => loadConsult())
  // 接收聊天消息
  socket.on('receiveChatMsg', async (event) => {
    socket.emit('updateMsgStatus', event.id)
    list.value.push(event)
    await nextTick()
    window.scrollTo(0, document.body.scrollHeight)
  })
})

onUnmounted(() => {
  socket.close()
})

// 发送文字信息
const onSendText = (text: string) => {
  socket.emit('sendChatMsg', {
    from: store.user?.id,
    // to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgText,
    msg: {
      content: text
    }
  })
}

// 发送图片信息
const onSendImage = (image: Image) => {
  socket.emit('sendChatMsg', {
    from: store.user?.id,
    // to: consult.value?.docInfo?.id,
    msgType: MsgType.MsgImage,
    msg: {
      picture: image
    }
  })
}



</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="Consultation Room" />
    <room-status></room-status>
    <room-message></room-message>
    <room-action
    @send-text="onSendText"
    @send-image="onSendImage"
    ></room-action>
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

