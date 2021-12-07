// 设计组件的类型
export enum DfComponentTypeEnum {
  /** 输入框 */
  input = 'input',
  /** 数字输入框 */
  inputNumber = 'InputNumber',
  /** 颜色选择器 */
  color = 'color',
  /** 下拉选择器 */
  select = 'select',
  /** 表格 */
  table = 'table',
  /** 开关 */
  switch = 'switch',
  /** 模型绑定选择器 */
  modelBind = 'ModelBind',
  /** 可拖拽项 */
  crossSortable = 'CrossSortable',
}

export type DfComponentBaseProps = {
  type: DfComponentTypeEnum;
  /** 表单项标签名称 */
  label: string;
  /** 表单项提示说明 */
  tips?: string;
  /** 表单域标签的位置 */
  labelPosition?: string;
  /** 表单项默认值 */
  defaultValue?: any;
} & {
  /** 可选项 */
  options?: DfSelectOptions;
  /** 是否可以多选 */
  multiple?: boolean;
  /** 项属性配置 */
  showItemPropsConfig?: boolean;
} & {
  max?: number;
  min?: number;
} & {
  table?: DfTableOption;
};

/*---------------------------------------modelBind-------------------------------------------*/
interface EditorModelBindProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createEditorModelBindProp({
  label = '字段绑定',
  defaultValue,
  tips,
}: EditorModelBindProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.modelBind,
    label,
    tips,
    defaultValue,
  };
}

/*---------------------------------------switch-------------------------------------------*/
interface EditorSwitchProp {
  label: string;
  defaultValue?: boolean;
  tips?: string;
}

export function createEditorSwitchProp({
  label,
  defaultValue,
  tips,
}: EditorSwitchProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.switch,
    label,
    tips,
    defaultValue,
  };
}

/*---------------------------------------input-------------------------------------------*/

interface DfInputProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createDfInputProp({
  label,
  defaultValue,
  tips,
}: DfInputProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.input,
    label,
    tips,
    defaultValue,
  };
}
/*---------------------------------------InputNumber -------------------------------------------*/

interface DfInputNumberProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  max?: number;
  min?: number;
}

export function createDfInputNumberProp({
  label,
  defaultValue,
  max,
  min,
  tips,
}: DfInputNumberProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.inputNumber,
    label,
    tips,
    max,
    min,
    defaultValue,
  };
}

/*---------------------------------------color-------------------------------------------*/

interface DfColorProp {
  label: string;
  defaultValue?: string;
}

export function createDfColorProp({
  label,
  defaultValue,
}: DfColorProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.color,
    label,
    defaultValue,
  };
}

/*---------------------------------------select-------------------------------------------*/

export type DfSelectOptions = {
  label: string;
  value: string | number | boolean | object;
  [prop: string]: any;
}[];

interface EditorSelectProp {
  label: string;
  options: DfSelectOptions;
  defaultValue?: any;
  multiple?: boolean;
  tips?: string;
}

export function createEditorSelectProp({
  label,
  options,
  defaultValue,
  tips,
  multiple,
}: EditorSelectProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.select,
    label,
    defaultValue,
    tips,
    options,
    multiple,
  };
}

/*---------------------------------------table-------------------------------------------*/

export type DfTableOption = {
  options: {
    label: string; // 列显示文本
    field: string; // 列绑定的字段
  }[];
  showKey: string;
};

interface EditorTableProp {
  label: string;
  option: DfTableOption;
  defaultValue?: { label: string; value: string }[];
}

export function createEditorTableProp({
  label,
  option,
  defaultValue,
}: EditorTableProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.table,
    label,
    table: option,
    defaultValue,
  };
}

/*---------------------------------------DfCrossSortableProp-------------------------------------------*/

interface DfCrossSortableProp {
  label: string;
  labelPosition: 'top' | '';
  multiple?: boolean;
  showItemPropsConfig?: boolean;
  defaultValue?: string[] | DfSelectOptions;
}

export function createDfCrossSortableProp({
  label,
  labelPosition,
  multiple,
  showItemPropsConfig,
  defaultValue,
}: DfCrossSortableProp): DfComponentBaseProps {
  return {
    type: DfComponentTypeEnum.crossSortable,
    label,
    multiple,
    showItemPropsConfig,
    labelPosition,
    defaultValue,
  };
}
