import { defineComponent, ref } from 'vue'
import { debounce } from '@yuci/utils'

const name = 'Debounce'

export default defineComponent({
  name,
  setup() {
    const count = ref(0)

    // 默认延迟300ms
    const onClick = debounce(() => {
      count.value++
    })

    // 默认1000ms
    const onClick2 = debounce(() => {
      count.value++
    }, 1000)

    return () => (
      <component-block name={name}>
        <p class="text-lg mb-3">{count.value}</p>
        <a-space>
          <a-button type="primary" onClick={onClick}>
            300ms Delay
          </a-button>

          <a-button type="primary" onClick={onClick2}>
            1s Delay
          </a-button>
        </a-space>
      </component-block>
    )
  }
})
