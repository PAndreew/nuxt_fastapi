<template>
  <div class="flex flex-col min-h-dvh">
    <header class="bg-primary text-primary-foreground py-4 px-6">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <!-- <MountainIcon class="w-6 h-6" /> -->
          <span class="text-xl font-bold">Airbnb Clone</span>
        </NuxtLink>
        <nav class="flex items-center gap-4">
          <NuxtLink to="/" class="hover:underline">
            Become a Host
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            Trips
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            Inbox
          </NuxtLink>
          <Avatar class="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <section class="bg-primary py-20">
        <div class="container mx-auto flex flex-col items-center gap-6">
          <h1 class="text-4xl font-bold text-primary-foreground">
            Find unique places to stay and things to do.
          </h1>
          <form class="bg-primary-foreground rounded-full w-full max-w-3xl flex items-center px-4 py-2">
            <Input
              type="text"
              placeholder="Where are you going?"
              class="flex-1 bg-transparent border-none focus:ring-0"
            />
            <Button class="rounded-full px-6 py-2">Search</Button>
          </form>
        </div>
      </section>
      <section class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8">Explore top destinations</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <NuxtLink to="/" class="group">
              <!-- <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Destination"
                class="rounded-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
              /> -->
              <div class="mt-2 font-medium text-lg">Paris</div>
            </NuxtLink>
            <NuxtLink to="/" class="group">
              <!-- <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Destination"
                class="rounded-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
              /> -->
              <div class="mt-2 font-medium text-lg">New York</div>
            </NuxtLink>
            <NuxtLink to="/" class="group">
              <!-- <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Destination"
                class="rounded-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
              /> -->
              <div class="mt-2 font-medium text-lg">London</div>
            </NuxtLink>
            <NuxtLink to="/" class="group">
              <!-- <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Destination"
                class="rounded-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
              /> -->
              <div class="mt-2 font-medium text-lg">Tokyo</div>
            </NuxtLink>
          </div>
        </div>
      </section>
      <section class="bg-muted py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8">Top-rated homes</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card class="group">
              <NuxtLink to="/" class="block">
                <!-- <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Home"
                  class="rounded-t-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
                /> -->
                <CardContent class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-lg">Cozy Mountain Retreat</div>
                    <div class="flex items-center gap-1 text-primary">
                      <!-- <StarIcon class="w-4 h-4" /> -->
                      <span>4.9</span>
                    </div>
                  </div>
                  <div class="text-muted-foreground text-sm">
                    2 guests · 1 bedroom · 1 bath
                  </div>
                  <div class="text-lg font-bold mt-2">$150/night</div>
                </CardContent>
              </NuxtLink>
            </Card>
            <Card class="group">
              <NuxtLink to="/" class="block">
                <!-- <img -->
                  <!-- src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Home"
                  class="rounded-t-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
                /> -->
                <CardContent class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-lg">Beachfront Bungalow</div>
                    <div class="flex items-center gap-1 text-primary">
                      <!-- <StarIcon class="w-4 h-4" /> -->
                      <span>4.8</span>
                    </div>
                  </div>
                  <div class="text-muted-foreground text-sm">
                    4 guests · 2 bedrooms · 2 baths
                  </div>
                  <div class="text-lg font-bold mt-2">$250/night</div>
                </CardContent>
              </NuxtLink>
            </Card>
            <Card class="group">
              <NuxtLink to="/" class="block">
                <!-- <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Home"
                  class="rounded-t-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
                /> -->
                <CardContent class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-lg">Treehouse Oasis</div>
                    <div class="flex items-center gap-1 text-primary">
                      <!-- <StarIcon class="w-4 h-4" /> -->
                      <span>4.7</span>
                    </div>
                  </div>
                  <div class="text-muted-foreground text-sm">
                    3 guests · 1 bedroom · 1 bath
                  </div>
                  <div class="text-lg font-bold mt-2">$180/night</div>
                </CardContent>
              </NuxtLink>
            </Card>
            <Card class="group">
              <NuxtLink to="/" class="block">
                <!-- <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Home"
                  class="rounded-t-lg object-cover aspect-[3/2] w-full transition-all group-hover:scale-105"
                /> -->
                <CardContent class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="font-medium text-lg">Luxury Loft Apartment</div>
                    <div class="flex items-center gap-1 text-primary">
                      <!-- <StarIcon class="w-4 h-4" /> -->
                      <span>4.9</span>
                    </div>
                  </div>
                  <div class="text-muted-foreground text-sm">
                    2 guests · 1 bedroom · 1 bath
                  </div>
                  <div class="text-lg font-bold mt-2">$200/night</div>
                </CardContent>
              </NuxtLink>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-primary text-primary-foreground py-8">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <!-- <MountainIcon class="w-6 h-6" /> -->
          <span class="text-xl font-bold">Airbnb Clone</span>
        </div>
        <nav class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/" class="hover:underline">
            Home
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            Explore
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            Become a Host
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            Help
          </NuxtLink>
          <NuxtLink to="/" class="hover:underline">
            About
          </NuxtLink>
        </nav>
        <div class="text-sm text-muted-foreground">
          &copy; 2024 Airbnb Clone. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// import { NuxtLink } from 'nuxt/app'
// import { Avatar, AvatarImage, AvatarFallback } from 'shadcn-vue'
// import { Input } from 'shadcn-vue'
// import { Button } from 'shadcn-vue'
// import { Card, CardContent } from 'shadcn-vue'
</script>

<script>
// export default {
//   components: {
//     MountainIcon,
//     StarIcon
//   }
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       {...props}
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }

// function StarIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       {...props}
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }
</script>

<style scoped>
/* Add your styles here */
</style>
