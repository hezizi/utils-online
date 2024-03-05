import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <section class="min-h-screen p-5">
        <header class="text-center">
          <h3 class="text-3xl mb-10">@yuci/utils</h3>
        </header>

        <main class="grid grid-cols-5 gap-6">
          <debounce />
          <throttle />
          <capitalize-first-letter />
          <kebab-to-camel />
          <get-random-arbitrary />
          <get-random-integer />
        </main>
      </section>
    )
  }
})
