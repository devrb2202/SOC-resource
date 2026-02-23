<template>
  <UApp>
    <div class="flex flex-row justify-center items-center fixed px-6 py-6 w-full z-50 bg-green-800">
      <div class="flex justify-end w-7xl px-2 md:px-6">
          <UButton
            color="primary"
            variant="outline"
            to="https://github.com/nuxt/ui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            label="Open Source"
            :trailing="true"
            size="xl"
          />
      </div>
    </div>
    <UMain class="pt-24">
        <slot />
    </UMain>
  </UApp>

</template>

<script setup lang="ts">

const posts = ref([
  {
    title: 'Email & Phishing Analysis',
    description: 'Start your defensive security career...',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    to: '/courses/blue-team-introduction'
  },
  {
    title: 'Network Traffic Analysis',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  },
  {
    title: 'Network Security Monitoring',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  },
  {
    title: 'Web Security Monitoring',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  },
  {
    title: 'Windows & Linux Security Monitoring',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  },
  {
    title: 'Malware Analysis',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  },
   {
    title: 'Threat Analysis',
    description: 'Explore the essential SOC analyst skills...',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to: '/courses/soc-team-internals'
  }
])


</script>
