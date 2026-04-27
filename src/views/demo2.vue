
<!-- src > App.vue -->
<template>
	<div class="container">
    <p>Vue3 Project</p>
    <p class="text">count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import echarts from '../modules/echarts'
import { ElInput, ElButton, ElBreadcrumb } from 'element-plus'

const count = ref(1)
console.log('This is index.vue')
console.log(ElInput, ElButton, ElBreadcrumb, echarts)
</script>

<style>
  .text {
    color: blue;
  }
</style>
