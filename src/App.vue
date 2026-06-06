<template>
  <IndexView />
</template>

<script setup lang="ts">
import IndexView from './views/IndexView.vue';
import { printBrand, printInfo } from './utils/logUtil';

setTimeout(() => {
  console?.clear();
  printBrand();
  printInfo();
}, 1500);
</script>

<style lang="scss">
::selection {
  background-color: #8b968d;
  color: #fff;
}
</style>
