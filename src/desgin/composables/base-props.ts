// 设计组件属性类型
export enum DfComponentPropTypeEnum {
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
  type: DfComponentPropTypeEnum;
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
interface DfModelBindProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createDfModelBindProp({
  label = '字段绑定',
  defaultValue,
  tips,
}: DfModelBindProp): DfComponentBaseProps {
  return {
    type: DfComponentPropTypeEnum.modelBind,
    label,
    tips,
    defaultValue,
  };
}

/*---------------------------------------switch-------------------------------------------*/
interface DfSwitchProp {
  label: string;
  defaultValue?: boolean;
  tips?: string;
}

export function createDfSwitchProp({
  label,
  defaultValue,
  tips,
}: DfSwitchProp): DfComponentBaseProps {
  return {
    type: DfComponentPropTypeEnum.switch,
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
    type: DfComponentPropTypeEnum.input,
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
    type: DfComponentPropTypeEnum.inputNumber,
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
    type: DfComponentPropTypeEnum.color,
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

interface DfSelectProp {
  label: string;
  options: DfSelectOptions;
  defaultValue?: any;
  multiple?: boolean;
  tips?: string;
}

export function createDfSelectProp({
  label,
  options,
  defaultValue,
  tips,
  multiple,
}: DfSelectProp): DfComponentBaseProps {
  return {
    type: DfComponentPropTypeEnum.select,
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

interface DfTableProp {
  label: string;
  option: DfTableOption;
  defaultValue?: { label: string; value: string }[];
}

export function createDfTableProp({
  label,
  option,
  defaultValue,
}: DfTableProp): DfComponentBaseProps {
  return {
    type: DfComponentPropTypeEnum.table,
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
    type: DfComponentPropTypeEnum.crossSortable,
    label,
    multiple,
    showItemPropsConfig,
    labelPosition,
    defaultValue,
  };
}
