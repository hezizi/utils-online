import { defineComponent } from 'vue'

const name = 'ComponentBlock'

export default defineComponent({
  name,
  props: {
    name: String
  },
  setup(props, { slots }) {
    return () => {
      const { name } = props
      return (
        <div class="flex flex-col border p-5">
          <div class="text-xl font-bold mb-6">{name}</div>
          <div class="flex flex-1 flex-col justify-between">
            {slots.default?.()}
          </div>
        </div>
      )
    }
  }
})
