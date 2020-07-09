/**
 * ipcMain, ipcRenderer 使用的事件常量
 */

module.exports = Object.freeze({
  // 连接数据库
  CONNECT_DB: 'CONNECT_DB',
  // 连接数据库后回调
  CONNECT_DB_REPLY: 'CONNECT_DB_REPLY',
  // 断开数据库连接
  DISCONNECT_DB: 'DISCONNECT_DB',
  // 同步数据库连接状态
  SYNC_CONNECT_DB_STATUS: 'SYNC_CONNECT_DB_STATUS',
  // 本地存储中 管理员登录 的账户信息
  AUTH_STORE: 'AUTH',
  // 本地存储中 连接数据库 的账户信息
  DB_CONNECT_STORE: 'DB_CONNECT_STORE',
  // 同步本地存储中连接数据库的账户信息
  SYNC_APP_STORE: 'SYNC_APP_STORE',
  // 管理员登录
  LOGIN: 'LOGIN',
  // 管理员登录后回调
  LOGIN_REPLY: 'LOGIN_REPLY',

  /** ------------ 用户管理 ------------ */
  // 用户管理 - 创建
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_REPLY: 'CREATE_USER_REPLY',
  // 用户管理 - 更新
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_USER_REPLY: 'UPDATE_USER_REPLY',
  // 用户管理 - 获取房间信息(分页、单条)
  GET_USER: 'GET_USER',
  GET_USER_REPLY: 'GET_USER_REPLY',
  // 用户管理 - 删除指定条件的房间信息
  DELETE_USER: 'DELETE_USER',
  DELETE_USER_REPLY: 'DELETE_USER_REPLY',

  /** ------------ 建筑管理 ------------ */
  // 建筑管理 - 创建
  CREATE_BUILDING: 'CREATE_BUILDING',
  CREATE_BUILDING_REPLY: 'CREATE_BUILDING_REPLY',
  // 建筑管理 - 更新
  UPDATE_BUILDING: 'UPDATE_BUILDING',
  UPDATE_BUILDING_REPLY: 'UPDATE_BUILDING_REPLY',
  // 建筑管理 - 获取建筑数据(分页、单条)
  GET_BUILDING: 'GET_BUILDING',
  GET_BUILDING_REPLY: 'GET_BUILDING_REPLY',
  // 建筑管理 - 删除指定条件的建筑信息
  DELETE_BUILDING: 'DELETE_BUILDING',
  DELETE_BUILDING_REPLY: 'DELETE_BUILDING_REPLY',
  // 建筑管理 - 上传建筑数据
  UPLOAD_BUILDING_DATA: 'UPLOAD_BUILDING_DATA',
  UPLOAD_BUILDING_DATA_REPLY: 'UPLOAD_BUILDING_DATA_REPLY',

  /** ------------ 建筑采样数据管理 ------------ */
  // 建筑采样数据管理 - 创建（批量、单条）
  UPLOAD_RECORDS: 'UPLOAD_RECORDS',
  // 建筑采样数据管理 - 创建（批量、单条）后回调
  UPLOAD_RECORDS_REPLY: 'UPLOAD_RECORDS_REPLY',
  // 建筑采样数据管理 - 获取采样数据(分页、单条)
  GET_RECORDS: 'GET_RECORDS',
  GET_RECORDS_REPLY: 'GET_RECORDS_REPLY',
  // 建筑管理 - 删除建筑所有记录
  CLEAN_BUILDING_RECORDS: 'CLEAN_BUILDING_RECORDS',
  CLEAN_BUILDING_RECORDS_REPLY: 'CLEAN_BUILDING_RECORDS_REPLY',
});
