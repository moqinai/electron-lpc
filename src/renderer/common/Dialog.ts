/*
 * @Description: 功能：
 * @Date: 2023-10-23 23:51:47
 * @LastEditTime: 2023-10-23 23:51:50
 */
export let createDialog = (url: string, config: any): Promise<Window> => {
  return new Promise((resolve, reject) => {
    let windowProxy = window.open(url, '_blank', JSON.stringify(config))
    let readyHandler = e => {
      let msg = e.data
      if (msg['msgName'] === `__dialogReady`) {
        window.removeEventListener('message', readyHandler)
        resolve(windowProxy)
      }
    }
    window.addEventListener('message', readyHandler)
  })
}
export let dialogReady = () => {
  let msg = { msgName: `__dialogReady` }
  window.opener.postMessage(msg)
}
