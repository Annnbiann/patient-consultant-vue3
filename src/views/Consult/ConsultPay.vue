<script setup lang="ts">
import { createConsultOrder, getConsultOrderPre } from '@/services/consult'
import { getPatientDetail } from '@/services/user'
import { useConsultStore } from '@/stores'
import type { ConsultOrderPreData, PartialConsult } from '@/types/consult'
import type { Patient } from '@/types/user'
import { showConfirmDialog, showDialog, showToast } from 'vant'
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
const store = useConsultStore()

const payInfo = ref<ConsultOrderPreData>()
const loadData = async () => {
  const res = await getConsultOrderPre({
    type: store.consult.type,
    illnessType: store.consult.illnessType
  })
  payInfo.value = res.data
  // 设置默认优惠券
  store.setCoupon(payInfo.value.couponId)

}

const patient = ref<Patient>()
const loadPatient = async () => {
  if (!store.consult.patientId) return
  const res = await getPatientDetail(store.consult.patientId)
  patient.value = res.data
}

onMounted(() => {
  loadData()
  loadPatient()
})

const agree = ref(false)

const show = ref(false)
const paymentMethod = ref<0 | 1>()
const loading = ref(false)
const orderId = ref('')
const submit = async () => {
  if (!agree.value) return showToast('Please read and tick the payment policy.')
  loading.value = true
  //send order request
  const res = await createConsultOrder(store.consult)
  loading.value = false
  store.clear()
  orderId.value = res.data.id

  // 打开
  show.value = true
}

// 用户引导
onBeforeRouteLeave(() => {
  if (orderId.value) return false
})


const router = useRouter()
const onClose = () => {
  return showConfirmDialog({
    title: 'Attention',
    message: 'Do you want to leave the payment page？',
    cancelButtonText: 'Yes',
    confirmButtonText: 'No'
  })
    .then(() => {
      return false
    })
    .catch(() => {
      orderId.value = ''
      router.push('/user/consult')
      return true
    })
}
</script>

<template>
  <div class="consult-pay-page" v-if="payInfo && patient">
    <cp-nav-bar title="Payment" />
    <div class="pay-info">
      <p class="tit">Consultation {{ payInfo.payment }}$ </p>
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <p class="desc">
        <span>Express consultation</span>
        <span></span>
      </p>
    </div>
    <van-cell-group>
      <!-- <van-cell title="coupon" :value="`-$${payInfo.couponDeduction}`" />
      <van-cell title="credit point" :value="`-$${payInfo.pointDeduction}`" /> -->
      <van-cell title="total" :value="`$${payInfo.actualPayment}`" class="pay-price" />
    </van-cell-group>
    <div class="pay-space"></div>
    <van-cell-group>
      <van-cell
        title="patient information"
        :value="`${patient.name} | age:${patient.age}`"
      ></van-cell>
      <van-cell title="Detail" :label="store.consult.illnessDesc"></van-cell>
    </van-cell-group>
    <div class="pay-schema">
      <van-checkbox v-model="agree">I agree on <span class="text">payment policy</span></van-checkbox>
    </div>
    <van-submit-bar
      button-type="primary"
      button-text="Pay Now"
      @click="submit"
      :loading="loading"
    />
    <van-action-sheet 
    v-model:show="show" 
    title="Select payment method"
    :close-on-click-popstate="false"
    :closeable="false"
    :before-close="onClose"
    >
      <div class="pay-type">
        <p class="amount">${{ payInfo.actualPayment.toFixed(2) }}</p>
        <van-cell-group>
          <van-cell title="Credit card" @click="paymentMethod = 0">
            <template #icon><cp-icon name="consult-credit" /></template>
            <template #extra><van-checkbox :checked="paymentMethod === 0" /></template>
          </van-cell>
          <van-cell title="Alipay" @click="paymentMethod = 1">
            <template #icon><cp-icon name="consult-alipay" /></template>
            <template #extra><van-checkbox :checked="paymentMethod === 1" /></template>
          </van-cell>
        </van-cell-group>
        <div class="btn">
          <van-button type="primary" round block>Pay</van-button>
        </div>
      </div>
    </van-action-sheet>

   
  </div>
  <div class="consult-pay-page" v-else>
    <van-skeleton title :row="10" style="margin-top: 18px;"/></div>
</template>


<style lang="scss" scoped>
.consult-pay-page {
  padding: 46px 0 50px 0;
}
.pay-info {
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  align-items: center;
  .tit {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .img {
    margin-right: 10px;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    overflow: hidden;
  }
  .desc {
    flex: 1;
    > span {
      display: block;
      color: var(--cp-tag);
      &:first-child {
        font-size: 16px;
        color: var(--cp-text2);
      }
    }
  }
}
.pay-price {
  ::v-deep() {
    .vam-cell__title {
      font-size: 16px;
    }
    .van-cell__value {
      font-size: 16px;
      color: var(--cp-price);
    }
  }
}
.pay-space {
  height: 12px;
  background-color: var(--cp-bg);
}
.pay-schema {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    color: var(--cp-primary);
  }
}
::v-deep() {
  .van-submit-bar__button {
    font-weight: normal;
    width: 360px;
    
  }
}
.pay-type {
  .amount {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .btn {
    padding: 15px;
  }
  .van-cell {
    align-items: center;
    .cp-icon {
      margin-right: 10px;
      font-size: 18px;
    }
    .van-checkbox :deep(.van-checkbox__icon) {
      font-size: 16px;
    }
  }
}
</style>
