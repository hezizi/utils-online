import { defineComponent, onMounted, ref } from 'vue'
import { getRandomArbitrary } from '@yuci/utils'

const name = 'GetRandomArbitrary'

export default defineComponent({
  name,
  setup() {
    const min = ref<number>(66.6)
    const max = ref<number>(88.8)
    const res = ref<number>(0)

    const onMinInput = (val: number) => {
      min.value = val
    }

    const onMaxInput = (val: number) => {
      max.value = val
    }

    const onClick = () => {
      res.value = getRandomArbitrary(min.value, max.value)
    }

    onMounted(() => onClick())

    return () => (
      <Block name={name}>
        <p class="text-lg mb-3">{res.value}</p>

        <div class="flex items-center mb-5">
          <a-input onInput={onMinInput} defaultValue={min.value} />
          <span class="mx-2">-</span>
          <a-input onInput={onMaxInput} defaultValue={max.value} />
        </div>

        <a-button type="primary" onClick={onClick} class="mb-3">
          生成 {min.value} 到 {max.value} 间随机数
        </a-button>
      </Block>
    )
  }
})
