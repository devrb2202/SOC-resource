<template>
  <!-- <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> -->
      <p class="text-muted text-2xl text-center">
      Hi, I’m Ramil Bercasio, a Computer engineer with a strong interest in SOC and Blue Team operations. I focus on building hands-on security labs to practice log analysis, threat detection, and incident response using SIEM tools such as Wazuh.

This website showcases my cybersecurity projects, including detection use cases and incident investigations, all conducted in authorized and ethical lab environments.
    </p>

    <div class="flex flex-row justify-center p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-5 space-x-5">
           <UBlogPost
              title="Introducing Nuxt Icon v1"
              description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
              image="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
              date="2024-11-25"
              class="w-100 h-100 line-clamp-3"
              v-for="x in 3"
            />
      </div>


    </div>
   
</template>