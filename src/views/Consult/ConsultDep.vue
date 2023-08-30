<script setup lang="ts">
import { getAllDep } from '@/services/consult'
import { useConsultStore } from '@/stores'
import type { TopDep } from '@/types/consult'
import { ref, onMounted, computed } from 'vue'

const active = ref(0)

const allDep = ref<TopDep[]>([])
onMounted(async () => {
  const res = await getAllDep()
  allDep.value = res.data
})
// 二级科室
const subDep = computed(() => allDep.value[active.value]?.child)

const store = useConsultStore()
const translationMap: Record<string, string>= {
  '内科': 'Internal medicine',
  '外科': 'Surgical',
  '妇产科学': 'Obstetrics and Gynecology',
  '儿科学': 'Pediatrics',
  '骨外科': 'Orthopedics',
  '眼科学': 'Ophthalmology',

  
};
function tToE(chineseName: string): string {
  return translationMap[chineseName] || chineseName;
}

</script>


<template>
  <div class="consult-dep-page">
    <cp-nav-bar title="Department" />
    <div class="wrapper">
      <van-sidebar v-model="active">
        <van-sidebar-item :title="tToE(item.name)" v-for="(item, index) in allDep.slice(0, 6)" :key="item.id"/>
        
      </van-sidebar>
      <div class="sub-dep">
        <router-link v-for="(sub, index) in subDep.slice(0,1)" :key="sub.id" to="/consult/illness" @click="store.setDep(sub.id)">Specialist</router-link>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.van-sidebar {
  width: 114px;
  &-item {
    padding: 14px;
    color: var(--cp-tag);
    &--select {
      color: var(--cp-main);
      font-weight: normal;
      &::before {
        display: none;
      }
    }
  }
}
.consult-dep-page {
  padding-top: 46px;
  .wrapper {
    height: calc(100vh - 46px);
    overflow: hidden;
    display: flex;
    .sub-dep {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      > a {
        display: block;
        padding: 14px 30px;
        color: var(--cp-dark);
      }
    }
  }
}
</style>



