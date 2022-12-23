import type { FormItemProp, FormRules as FR } from "element-plus";
export interface FormMethods {
  validate: (
    call: (isValid: boolean, invalidFields?: any) => void
  ) => Promise<void>;
  validateField: () => Promise<void>;
  resetFields: (props?: Array<FormItemProp>) => void;
  scrollToField: (prop: FormItemProp) => void;
  clearValidate: (props?: Array<FormItemProp>) => void;
}

export type FormRules = FR;
