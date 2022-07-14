<template>
  <template v-for="(tab, index) in tabs" :key="`${index}`">
    <template v-if="tab.children && tab.children.length > 0">
      <a-sub-menu>
        <template #title>{{ tab.label }}</template>
        <a-menu-item v-for="(item, itemIndex) in tab.children" :key="`${index}_${itemIndex}`">{{ item.label }}</a-menu-item>
<!--        <MenuItem v-if="tab.children.length > 0" :tabs="tab.children"></MenuItem>-->
      </a-sub-menu>
    </template>
    <template v-else>
      <a-menu-item :key="`${index + 1}`">{{ tab.label }}</a-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {tab} from '@/types/common'


defineProps<{
  tabs: tab[]
}>()

</script>

<style scoped>

</style>
