/*
 * @Description: 功能：
 * @Date: 2023-10-26 00:16:49
 * @LastEditTime: 2023-10-26 00:17:00
 */
//src\model\ModelMessage.ts
import { ModelBase } from './ModelBase'
export class ModelMessage extends ModelBase {
  createTime?: number
  receiveTime?: number
  messageContent?: string
  chatId?: string
  fromName?: string
  avatar?: string
  //** 是否为传入消息 */
  isInMsg?: boolean
}
