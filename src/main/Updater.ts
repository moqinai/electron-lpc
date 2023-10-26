/*
 * @Author: lipengcheng
 * @Date: 2023-10-27 00:38:39
 * @LastEditTime: 2023-10-27 00:38:42
 * @Description: 功能： 应用程序全量升级
 */
//src\main\Updater.ts
import { dialog } from "electron"
import { autoUpdater } from "electron-updater"

export class Updater {
  static check() {
    autoUpdater.checkForUpdates();
    autoUpdater.on("update-downloaded", async () => {
      // 发现服务端存在更新的安装包，则会把安装包下载到用户本地电脑内，当新版本安装包下载完成后，update-downloaded 事件被触发。
      await dialog.showMessageBox({
        message: "有可用的升级",
      });
      autoUpdater.quitAndInstall();
    });
  }
}
