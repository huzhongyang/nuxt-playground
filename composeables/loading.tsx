import { type App, createApp } from 'vue'

const loading = defineComponent({
  setup() {
    return () => (
      <div class="absolute left-0 top-0 z-50 h-full w-full flex items-center justify-center bg-[#f37e7e9f]">
        <div class="i-svg-spinners-gooey-balls-1 h-16 w-16"></div>
      </div>
    )
  },
})

const loadCount = ref(0)

const isShown = computed({
  get() {
    if (loadCount.value < 0) {
      loadCount.value = 0
    }
    return loadCount.value > 0
  },
  set(value) {
    if (value) {
      loadCount.value++
    }
    else {
      loadCount.value--
    }
  },
})

export function useLoading(root?: HTMLDivElement) {
  let app: App

  watch(isShown, () => {
    if (isShown.value) {
      if (!root) {
        root = document.createElement('div')
        document.body.append(root)
      }
      app = createApp(loading)
      app.mount(root)
    }
    else {
      app.unmount()
      root?.remove()
    }
  })

  return {
    show() {
      isShown.value = true
    },
    cancel(all: boolean = false) {
      if (all && loadCount.value > 0) {
        loadCount.value = 1
      }
      isShown.value = false
    },
  }
}

export default loading
