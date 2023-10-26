/*
 * @Author: lipengcheng
 * @Date: 2023-10-26 21:54:46
 * @LastEditTime: 2023-10-27 01:13:09
 * @Description: 功能：创建一个数据库访问类
 */
/* 
  这段代码导出一个数据库访问对象，只有第一次引入这个数据库访问对象的时候才会执行此对象的初始化逻辑，
  也就是说，无论我们在多少个组件中引入这个数据库访问对象，它只会被初始化一次，但这个约束只局限在一个进程内，也就是说对于整个应用而言，主进程有一个 db 实例，渲染进程也有一个 db 实例，两个实例是完全不同的
*/
import knex, { Knex } from 'knex'
import fs from 'fs'
import path from 'path'

let dbInstance: Knex | any

if (!dbInstance) {
  let dbPath
  if (location.href.startsWith('http')) {
    dbPath = path.join(process.execPath, '../../../../src/common/db.db')
  } else {
    dbPath =
      process.env.APPDATA ||
      (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + '/.local/share')
    dbPath = path.join(dbPath, 'electron-jue-jin/db.db')
    let dbIsExist = fs.existsSync(dbPath)
    console.log('copy', dbIsExist, dbPath)
    if (!dbIsExist) {
      let resourceDbPath = path.join(process.execPath, '../resources/db.db')
      fs.copyFileSync(resourceDbPath, dbPath)
      console.log('copy')
    }
  }
  dbInstance = knex({
    client: 'better-sqlite3',
    connection: { filename: dbPath },
    useNullAsDefault: true,
  })
}
export let db = dbInstance
