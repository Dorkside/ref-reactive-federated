<script setup>
import { ref, reactive } from "vue";

const state = reactive({ count: 0 });
const countRef = ref(0);

setInterval(() => (state.count += 1), 1000);
setInterval(() => (countRef.value += 1), 1000);
</script>
<template>
  <main>
    <div>state.count: {{ state.count }}</div>
    <div>countRef: {{ countRef }}</div>
  </main>
</template>
