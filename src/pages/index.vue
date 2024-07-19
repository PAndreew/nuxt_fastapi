<template>

</template>

<script setup>
import { ref } from 'vue'

const tools = ref([
  {
    image: '/images/kevero.png',
    name: 'Power Drill',
    description: 'High power drill for all your construction needs.',
    price: 25
  },
  {
    image: '/images/saw.jpg',
    name: 'Circular Saw',
    description: 'Cut through wood with ease with our circular saw.',
    price: 30
  },
  // Add more tools as needed
])
</script>
