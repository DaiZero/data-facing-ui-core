import type { DfComponentBaseProps } from './base-props'
import type { CSSProperties } from 'vue'
import { Action } from './action'
import {getuuid} from "../common/utils"
import {useDotProp} from "./use-dot-prop"
import {isValidKey} from "../common/is"


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
 export interface DfComponentData {
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
    block: DfComponentData
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

export function createNewBlock(component: DfBaseComponent): DfComponentData {
      
  return {
    _vid: `vid_${getuuid()}`,
    moduleName: component.moduleName,
    componentKey: component!.key,
    label: component!.label,
    adjustPosition: true,
    focus: false,
    styles: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingTop: '0',
      paddingRight: '0',
      paddingLeft: '0',
      paddingBottom: '0',
      tempPadding: '0'
    },
    hasResize: false,
    props: Object.keys(component.props || {}).reduce((prev, curr) => {
      const { propObj, prop } = useDotProp(prev, curr)
      if (component.props![curr]?.defaultValue) {        
        propObj[prop] = prev[curr] = component.props![curr]?.defaultValue
      }
      return prev
    }, {}),
    draggable: component.draggable ?? true, // 是否可以拖拽
    showStyleConfig: component.showStyleConfig ?? true, // 是否显示组件样式配置
    animations: [], // 动画集
    actions: [], // 动作集合
    events: component.events || [], // 事件集合
    model: {}
  }
}