export function http(url: string, method: string, data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${url} ${method} ${JSON.stringify(data)}`)
    }, 3000)
  })
}
