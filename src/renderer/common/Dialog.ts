/*
 * @Description: 功能：
 * @Date: 2023-10-23 23:51:47
 * @LastEditTime: 2023-10-27 01:19:55
 */

// 当渲染进程的某个组件需要打开子窗口时，可以使用Dialog.ts提供的createDialog方法
export let createDialog = (url: string, config: any): Promise<Window> => {
  /* 
    把window.open的逻辑封装到一个Promise对象中， 通过window.open打开子窗口后，当前窗口马上监听message事件，子窗口有消息发送给当前窗口时，这个事件将被触发。
  */
  return new Promise((resolve) => {
    let windowProxy = window.open(url, '_blank', JSON.stringify(config))
    /* 
      e.data 里存放着具体的消息内容，我们把它格式化成一个 JSON 对象。
      如果这个 JSON 对象的msgName属性为__dialogReady字符串，我们就成功resolve。
      Promise对象成功resolve之前要移除掉message事件的监听函数，避免内存泄漏（如果不这么做，用户每打开一个子窗口，就会注册一次message事件
    */
    let readyHandler = (e: any) => {
      let msg = e.data
      if (msg['msgName'] === `__dialogReady`) {
        window.removeEventListener('message', readyHandler)
        resolve(windowProxy as any)
      }
    }
    window.addEventListener('message', readyHandler)
  })
}

export let dialogReady = () => {
  /* 
    这个方法是为子窗口服务的，当子窗口完成了必要的业务逻辑之后，就可以执行这个方法，通知父窗口自己已经加载成功。
  */
  let msg = { msgName: `__dialogReady` }
  window.opener.postMessage(msg)
}
