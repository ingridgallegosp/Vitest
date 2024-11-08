<!-- src/components/MyComponent.vue -->
<template>
  <div>
    <button @click="increment">Contar: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>