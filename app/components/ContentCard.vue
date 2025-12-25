<script setup lang="ts">
const posts = ref([
  {
    title: 'Blue Team Introduction',
    description: 'Start your defensive security career by exploring the Blue Team and its core - the Security Operations Centre (SOC). You’ll learn why defensive security is essential and how it helps organisations stay protected against attacks.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'SOC Team Internals',
    description: 'Explore the essential SOC analyst skills to help you triage, classify, and escalate alerts in real-world SOC environments.',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Core SOC Solutions',
    description: 'Understanding security solutions is key for SOC analysts. This module covers SIEM, EDR and SOAR, the core security solutions used in a SOC.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Cyber Defense Frameworks',
    description: 'Learn how defensive frameworks, such as Pyramid of Pain, Cyber Kill Chain, and MITRE, help you understand adversarial behaviour and harden detection, triage, and response.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Phishing Analysis',
    description: 'Learn how to analyse and defend against phishing emails. Investigate real-world phishing attempts using a variety of techniques.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Network Traffic Analysis',
    description: 'Learn the basics of network traffic analysis and get hands-on with Wireshark to detect various types of attacks.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Network Security Monitoring',
    description: 'Learn about key fundamentals of Network Security, the importance of monitoring network perimeters and how to analyse the network traffic and logs for the footprints of potential network based attacks like MITM, network discovery and data exfiltration.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Web Security Monitoring',
    description: 'Learn how to protect and monitor the web, the ecosystem every organisation relies upon to deliver its services, all in a series of SOC-oriented labs and real-world scenarios.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
   {
    title: 'Windows Security Monitoring',
    description: 'Learn how Windows logging works and how you can use it to detect common Windows attacks - all through real-world examples and challenging, hands-on threat detection labs.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
   {
    title: 'Linux Security Monitoring',
    description: 'Learn how Linux logging works and how you can use it to detect common Linux attacks - all through real-world examples and challenging, hands-on threat detection labs.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Malware Concepts for SOC',
    description: 'In this module, you’ll learn to identify common malware types, understand their purpose, analyse files and understand why living off the land attacks are becoming more common.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'Threat Analysis Tools',
    description: 'Understand how to leverage threat intelligence to detect, investigate and defend against adversaries. Gain practical skills in using threat data, enrichment techniques, and analysis workflows to strengthen SOC capabilities.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
  {
    title: 'SIEM Triage for SOC',
    description: 'Explore how SIEM solutions help detect early signs of attacks, investigate SOC alerts, and correlate logs from multiple sources to build an incident timeline. These skills will be vital for you to identify and respond to real-world threats as a SOC analyst.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
   {
    title: 'SOC Level 1 Capstone Challenges',
    description: 'Investigate critical incidents and apply all the skills needed to be an effective SOC analyst while handling various artefacts.',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22',
    to:"https://nuxt.com/blog/nuxt-icon-v1-0",
    target:"_blank"
  },
 
])
</script>

<template>
  <UBlogPosts :posts="posts" 
    :ui="{
       root: 'line-clamp-1'
        
    }"
  />
</template>
