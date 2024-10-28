<script setup lang="ts">
function fileChangeHandler(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  file && cutFile(file)
}

async function cutFile(file: File) {
  const CHUNK_SIZE = 1024
  const chunkCount = Math.ceil(file.size / CHUNK_SIZE)
  const totalCut = []

  console.time('start')

  for (let i = 0; i < chunkCount; i++) {
    totalCut.push(await getChunk(file, CHUNK_SIZE, i))
  }
  console.timeEnd('start')
  console.log(totalCut)
}

async function getChunk(file: File, size: number, index: number) {
  return new Promise((resolve) => {
    const fileReader = new FileReader()
    const start = index * size
    const end = start + size > file.size ? file.size : start + size

    fileReader.addEventListener('load', (e) => {
      const chunk = e.target?.result
      resolve(chunk)
    })

    fileReader.readAsArrayBuffer(file.slice(start, end))
  })
}
</script>

<template>
  <div flex="~ col gap-2 items-center justify-center" h-100% w-100%>
    <h1> cut file upload</h1>
    <input type="file" @change="fileChangeHandler">
  </div>
</template>
