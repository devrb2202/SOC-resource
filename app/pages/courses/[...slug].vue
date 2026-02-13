<!-- <script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template> -->

<!-- <script setup lang="ts">
const route = useRoute()

const path = '/' + (route.params.slug as string[]).join('/')

const { data: page } = await useAsyncData(
  `page-${path}`,
  () => queryCollection('content').path(path).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template> -->

<!-- <script setup lang="ts">
const route = useRoute()

const path = '/' + (route.params.slug as string[]).join('/')

const { data: page } = await useAsyncData(
  () => `course-${path}`,
  () => queryCollection('content').path(`/courses${path}`).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template> -->
<script setup lang="ts">
const route = useRoute()

const path = '/' + (route.params.slug as string[]).join('/')

const { data: page } = await useAsyncData(
  () => `course-${path}`,
  () => queryCollection('content').path(`/courses${path}`).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <!-- 🔙 Navigation buttons -->
    <!-- <div class="flex gap-3 mb-6">
      <NuxtLink
        to="/"
        class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
      >
        ← Home
      </NuxtLink>

      <NuxtLink
        to="/courses"
        class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
      >
        ← Courses
      </NuxtLink>
    </div> -->

    <!-- 📘 Markdown content -->
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
