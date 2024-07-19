// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  srcDir: "src/",
  routeRules: {
    '/api/**': {
      proxy: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/**" : "/api/**",
    },
    '/docs': {
      proxy: "http://127.0.0.1:8000/docs",
    },
    '/openapi.json': {
      proxy: "http://127.0.0.1:8000/openapi.json",
    }
  },
  modules: ['@nuxtjs/tailwindcss', "shadcn-nuxt"],
  shadcn: {
      /**
       * Prefix for all the imported component
       */
      prefix: '',
      /**
       * Directory that the component lives in.
       * @default "./src/components/ui"
       */
      componentDir: './src/components/ui'
    },
  vite: {
    server: {
      hmr: {
        overlay: true, // Show errors in the browser overlay
      },
      watch: {
        usePolling: true, // This can help in some environments where the default file watching mechanism might not work properly
      },
    },
  },
})