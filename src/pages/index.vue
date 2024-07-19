<template>
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    <ProductCard
      v-for="(tool, index) in tools"
      :key="index"
      :image="tool.image"
      :name="tool.name"
      :description="tool.description"
      :price="tool.price"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '~/components/ProductCard.vue'

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
