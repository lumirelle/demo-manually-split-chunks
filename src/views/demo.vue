<!-- src > App.vue -->
<script setup>
import { ElInput } from 'element-plus'
// oxlint-disable no-console
import { ref } from 'vue'
import echarts from '../modules/echarts'

const count = ref(1)
console.log('This is index.vue')
console.log(ElInput, echarts)
</script>

<template>
  <div class="container">
    <p>Vue3 Project</p>
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
