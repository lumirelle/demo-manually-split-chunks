<script setup>
import { ElBreadcrumb, ElButton, ElInput } from 'element-plus'
// oxlint-disable no-console
import { ref } from 'vue'
import echarts from '../modules/echarts'

const count = ref(1)
console.log('This is 123.vue')
console.log(ElInput, ElButton, ElBreadcrumb, echarts)
</script>

<template>
  <div class="container">
    <p>Vue3 Project / xxx</p>
    <p class="text">
      count: {{ count }}
    </p>
  </div>
</template>

<style>
  .text {
    color: blue;
  }
</style>
