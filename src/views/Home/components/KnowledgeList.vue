<script setup lang="ts">
import KnowledgeCard from './KnowledgeCard.vue'
</script>

<template>
  <div class="knowledge-list">
    <van-list v-model:loading="loading"
      :finished="finished"
      finished-text="No more"
      @load="onLoad">
      <knowledge-card v-for="i in 5" :key="i"></knowledge-card>
    </van-list>
    
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
