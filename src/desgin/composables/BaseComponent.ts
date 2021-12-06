import type { DfComponentBaseProps } from './BaseProps'
import type { CSSProperties } from 'vue'


// 组件模块
export interface ComponentModules {
  // 基础组件
  baseWidgets: DfBaseComponent[]
  // 容器组件
  containerComponents: DfBaseComponent[] 
}

/**
 * @description 组件属性
 */
 export interface DfComponentBlockData {
  /** 组件id 时间戳, 组件唯一标识 */
  _vid: string
  /** 组件所属的模块（基础组件、容器组件） */
  moduleName: keyof ComponentModules
  /** 映射 VisualEditorConfig 中 componentMap 的 component对象 */
  componentKey: string
  /** 组件标签名称 */
  label: string
  /** 是否需要调整位置 */
  adjustPosition: boolean
  /** 当前是否为选中状态 */
  focus: boolean
  /** 当前组件的样式 */
  styles: CSSProperties
  /** 是否调整过宽度或者高度 */
  hasResize: boolean
  /** 组件的设计属性 */
  props: Record<string, any>
  /** 绑定的字段 */
  model: Record<string, string>
  /** 组件是否可以被拖拽 */
  draggable: boolean
  /** 是否显示组件样式配置项 */
  showStyleConfig?: boolean
  /** 动画集 */
  animations?: Animation[]
  /** 组件动作集合 */
  actions: Action[]
  /** 组件事件集合 */
  events: { label: string; value: string }[]
  [prop: string]: any
}

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

export interface DfBaseComponent {
  /** 组件name */
  key: string
  /** 组件所属模块名称 */
  moduleName: keyof ComponentModules
  /** 组件唯一id */
  _vid?: string
  /** 组件中文名称 */
  label: string
  /** 组件预览函数 */
  preview: () => JSX.Element
  /** 组件渲染函数 */
  render: (data: {
    props: any
    model: any
    styles: CSSProperties
    block: DfComponentBlockData
    custom: Record<string, any>
  }) => () => JSX.Element
  /** 组件是否可以被拖拽 */
  draggable?: boolean
  /** 是否显示组件的样式配置项 */
  showStyleConfig?: boolean
  /** 组件属性 */
  props?: Record<string, DfComponentBaseProps>
  /** 动画集 */
  animations?: Animation[]
  /** 组件事件集合 */
  events?: { label: string; value: string }[]
  /** 组件样式 */
  styles?: CSSProperties
}