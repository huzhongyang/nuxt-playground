<script setup lang="ts">
import { useLoading } from '~/composeables/loading'
import { http } from '~/utils'

const { show, cancel } = useLoading()

function clickHandler() {
  show()
  show()
  show()
  http('/test', 'get', {
    id: 1,
  }).then((r) => {
    console.log(r)
    cancel(true)
  })
}

function scopeBtnClick() {

}
</script>

<template>
  <div p-4 flex="~ col gap-2">
    <h3 text="2xl">
      global loading
    </h3>
    <button bg="red/30 hover:red/80" rounded-lg p-2 @click="clickHandler">
      show
    </button>

    <div border="~ red 1px solid rounded-lg" h-400px>
      <h3 text="xl" p4>
        scope loading
      </h3>
      <button bg="red/30 hover:red/80" rounded-lg p-2 @click="scopeBtnClick">
        show
      </button>
    </div>
  </div>
</template>
