
/**
 * @description 组件动作事件处理
 */
 export interface ActionHandle {
  key: string
  name: string
  link: string[]
  data?: {
    bind?: string
    recv?: string
  }
}
/**
 * @description 组件动作
 */
export interface Action {
  key: string
  name: string
  event: string
  handle: ActionHandle[]
}