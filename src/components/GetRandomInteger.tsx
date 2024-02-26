import { defineComponent, onMounted, ref } from 'vue'
import { getRandomInteger } from '@yuci/utils'

const name = 'GetRandomInteger'

export default defineComponent({
  name,
  setup() {
    const min = ref<number>(10.2)
    const max = ref<number>(15.6)
    const res = ref<number>(0)

    const onMinInput = (val: number) => {
      min.value = val
    }

    const onMaxInput = (val: number) => {
      max.value = val
    }

    const onClick = (isContainMax = false) => {
      res.value = getRandomInteger(min.value, max.value, isContainMax)
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

        <a-button type="primary" onClick={() => onClick()} class="mb-3">
          生成 {min.value} 到 {max.value} 间随机整数
        </a-button>

        <a-button type="primary" onClick={() => onClick(true)}>
          包含最大值 {Math.floor(max.value)}
        </a-button>
      </Block>
    )
  }
})
