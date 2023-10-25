/*
 * @Description: 功能：
 * @Date: 2023-10-25 23:52:57
 * @LastEditTime: 2023-10-25 23:53:03
 */
// src\model\ModelChat.ts
import { ModelBase } from './ModelBase'
export class ModelChat extends ModelBase {
  fromName?: string
  sendTime?: number | string
  isSelected = false
  lastMsg?: string
  avatar?: string
  /**
   * 0单聊，1群聊，2公众号，3文件传输助手
   */
  chatType?: number
}
