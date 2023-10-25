/*
 * @Description: 功能：
 * @Date: 2023-10-25 23:53:13
 * @LastEditTime: 2023-10-25 23:54:40
 */
// src\model\ModelBase.ts
import crypto from 'crypto'
// 使用 Node.js crypto模块的randomUUID方法来生成每个聊天会话的 ID
export class ModelBase {
  id: string
  constructor() {
    this.id = crypto.randomUUID()
  }
}
