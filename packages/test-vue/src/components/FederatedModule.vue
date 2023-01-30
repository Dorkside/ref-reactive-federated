<script setup>
import { ref, reactive, getCurrentInstance } from "vue";

const state = reactive({ count: 0 });
const countRef = ref(0);

setInterval(() => {
  state.count += 1;
  countRef.value += 1;
  console.log(state, countRef);
}, 1000);

console.log("Vue instance", getCurrentInstance());
</script>
<template>
  <main>
    <div>state.count: {{ state.count }}</div>
    <div>countRef: {{ countRef }}</div>
  </main>
</template>
