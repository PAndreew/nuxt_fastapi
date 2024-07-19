<template>
    <div>
      <div className="container mx-auto flex flex-col items-center gap-6 mt-8">
        <h1 className="text-4xl font-boldtext-black">
          Mi kéne ha vóna?
        </h1>
      </div>
      <UContainer class="mt-8 max-w-md">
        <USelectMenu
    searchable
    searchable-placeholder="Search a person..."
    placeholder="Select a person"
    size="xl"
    color="white"
    :ui="{ 
      rounded:'rounded-full', 
      color: {
        white: {
          outline: 'shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-300',
        }
      }}"
    :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
    model-value="Wade Cooper"
  />
</UContainer>
      <NuxtPage/>
    </div>
  </template>
  
  <script setup>
  const appConfig = useAppConfig()
  import Navbar from '~/components/Navbar.vue'
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  