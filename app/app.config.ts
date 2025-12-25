export default defineAppConfig({
  ui: {
    blogPost: {
      slots: {
        title: 'text-xl text-pretty font-semibold text-highlighted',
        description: 'mt-1 text-base text-pretty line-clamp-3',
        authors: 'pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5',
        avatar: '',
        date: 'text-sm',
      },
    }
  }
})
