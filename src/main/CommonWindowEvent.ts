/*
 * @Description: 功能：
 * @Date: 2023-10-24 23:48:32
 * @LastEditTime: 2023-10-27 01:13:49
 */

import { BrowserWindow, ipcMain, app } from 'electron'
// 主进程公共消息处理逻辑
export class CommonWindowEvent {
  private static getWin(event: any) {
    return BrowserWindow.fromWebContents(event.sender)
  }
  public static listen() {
    ipcMain.handle('minimizeWindow', e => {
      this.getWin(e)?.minimize()
    })

    ipcMain.handle('maxmizeWindow', e => {
      this.getWin(e)?.maximize()
    })

    ipcMain.handle('unmaximizeWindow', e => {
      this.getWin(e)?.unmaximize()
    })

    ipcMain.handle('hideWindow', e => {
      this.getWin(e)?.hide()
    })

    ipcMain.handle('showWindow', e => {
      console.log('showWindow')
      this.getWin(e)?.show()
    })

    ipcMain.handle('closeWindow', e => {
      console.log('closeWindow')
      this.getWin(e)?.close()
    })
    ipcMain.handle('resizable', e => {
      return this.getWin(e)?.isResizable()
    })
    ipcMain.handle('getPath', (e, name: any) => {
      console.log(e)
      return app.getPath(name)
    })
  }

  //主进程公共事件处理逻辑
  public static regWinEvent(win: BrowserWindow) {
    win.on('maximize', () => {
      win.webContents.send('windowMaximized')
    })
    win.on('unmaximize', () => {
      win.webContents.send('windowUnmaximized')
    })

    //注册打开子窗口的回调函数
    win.webContents.setWindowOpenHandler(param => {
      //基础窗口配置对象
      let config = {
        frame: false,
        show: true,
        webPreferences: {
          nodeIntegration: true,
          webSecurity: false,
          allowRunningInsecureContent: true,
          contextIsolation: false,
          webviewTag: true,
          spellcheck: false,
          disableHtmlFullscreenWindowResize: true,
          nativeWindowOpen: true,
        },
      }
      //开发者自定义窗口配置对象
      let features = JSON.parse(param.features)
      for (let p in features) {
        if (p === 'webPreferences') {
          for (let p2 in features.webPreferences) {
            //@ts-ignore
            config.webPreferences[p2] = features.webPreferences[p2]
          }
        } else {
          config.webPreferences = features[p]
        }
      }
      //@ts-ignore
      if (config['modal'] === true) config.parent = win
      //允许打开窗口，并传递窗口配置对象
      return { action: 'allow', overrideBrowserWindowOptions: config }
    })
  }
}
