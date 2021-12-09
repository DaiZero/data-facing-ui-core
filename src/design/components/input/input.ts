import {
  createDfSwitchProp,
  createDfInputProp,
  createDfSelectProp,
} from '../../composables/base-props';

export const createFieldProps = () => ({
  colon: createDfSwitchProp({ label: '是否在 label 后面添加冒号' }),
  'error-message': createDfInputProp({ label: '底部错误提示文案' }),
  'error-message-align': createDfSelectProp({
    label: '错误提示文案对齐方式',
    options: [
      {
        label: '左对齐',
        value: 'left',
      },
      {
        label: '居中',
        value: 'center',
      },
      {
        label: '右对齐',
        value: 'right',
      },
    ],
    defaultValue: 'left',
  }),
  border: createDfSwitchProp({ label: '是否显示内边框', defaultValue: true }),
  readonly: createDfSwitchProp({ label: '是否为只读状态' }),
  required: createDfSwitchProp({ label: '是否显示表单必填星号' }),
  rules: createDfInputProp({ label: '表单校验规则' }),
});

