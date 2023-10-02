<script setup lang="ts">

// import { useShowPrescription } from '@/composables'
import { MsgType, PrescriptionStatus } from '@/enums'
import { useUserStore } from '@/stores'
import type { Image } from '@/types/consult'
import type { Message, Prescription } from '@/types/room'
// import { getConsultFlagText, getIllnessTimeText } from '@/utils/filter'
// import dayjs from 'dayjs'
// import { showImagePreview, showToast } from 'vant'
// import EvaluateCard from './EvaluateCard.vue'
// import { useRouter } from 'vue-router'

// defineProps<{
//   item: Message
// }>()

// 预览图片
// const onPreviewImage = (images?: Image[]) => {
//   if (images && images.length) showImagePreview(images.map((item) => item.url))
//   else showToast('暂无图片')
// }

</script>

<template>
  <!-- 患者卡片 -->
  <div class="msg msg-illness" >
    <div class="patient van-hairline--bottom">
      <!-- <p>{{ item.msg.consultRecord?.patientInfo.name }}
        {{ item.msg.consultRecord?.patientInfo.genderValue }}
        age:{{ item.msg.consultRecord?.patientInfo.age }}</p> -->
      <p >
        <!-- {{ getIllnessTimeText(item.msg.consultRecord?.illnessTime) }} |
        {{ getConsultFlagText(item.msg.consultRecord?.consultFlag) }} -->
      </p>
    </div>
    <van-row>
      <van-col span="6">病情描述</van-col>
      <van-col span="18"></van-col>
      <van-col span="6">图片</van-col>
      <!-- <van-col span="18" @click="onPreviewImage(item.msg.consultRecord?.pictures)">点击查看</van-col> -->
    </van-row>
  </div>
  <!-- 通知-通用 -->
  <div class="msg msg-tip">
    <div class="content">
      <span>The doctor is coming...</span>
    </div>
  </div>
  <!-- 通知-温馨提示 -->
  <!-- <div class="msg msg-tip">
    <div class="content">
      <span class="green">温馨提示：</span>
      <span>在线咨询不能代替面诊，医护人员建议仅供参考</span>
    </div>
  </div> -->
  <!-- 通知-结束 -->
  <!-- <div class="msg msg-tip msg-tip-cancel">
    <div class="content">
      <span>订单取消</span>
    </div>
  </div> -->
  <!-- 发送文字 -->
    <!-- <div class="msg msg-to">
    <div class="content">
      <div class="time">20:12</div>
      <div class="pao">大夫你好？</div>
    </div>
    <van-image src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg" />
  </div> -->
  <!-- 发送图片 -->
  <!-- <div class="msg msg-to">
    <div class="content">
      <div class="time">20:12</div>
      <van-image 
        fit="contain" 
        src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg"
      />
    </div>
    <van-image src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg" />
  </div> -->
  <!-- 接收文字 -->
  <!-- <div class="msg msg-from">
    <van-image src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg" />
    <div class="content">
      <div class="time">20:12</div>
      <div class="pao">哪里不舒服</div>
    </div>
  </div> -->
  <!-- 接收图片 -->
  <!-- <div class="msg msg-from">
    <van-image src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg" />
    <div class="content">
      <div class="time">20:12</div>
      <van-image 
        fit="contain" 
        src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg"
      />
    </div>
  </div> -->
  <!-- 处方卡片 -->
  <!-- <div class="msg msg-recipe">
    <div class="content">
      <div class="head van-hairline--bottom">
        <div class="head-tit">
          <h3>电子处方</h3>
          <p>原始处方 <van-icon name="arrow"></van-icon></p>
        </div>
        <p>李富贵 男 31岁 血管性头痛</p>
        <p>开方时间：2022-01-15 14:21:42</p>
      </div>
      <div class="body">
        <div class="body-item" v-for="i in 2" :key="i">
          <div class="durg">
            <p>优赛明 维生素E乳</p>
            <p>口服，每次1袋，每天3次，用药3天</p>
          </div>
          <div class="num">x1</div>
        </div>
      </div>
      <div class="foot"><span>购买药品</span></div>
    </div>
  </div> -->
  <!-- 评价卡片，后期实现 -->
</template>

<style lang="scss" scoped>
@import '@/styles/room.scss';
</style>
