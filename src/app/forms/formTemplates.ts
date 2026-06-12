import kansasPps1001 from './kansas/PPS-1001-new-case.json';

export type FormFieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'date'
  | 'email'
  | 'number'
  | 'checkbox'
  | 'group';

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormFieldSchema {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  description?: string;
  options?: FormFieldOption[];
  optionsKey?: string;
  optionsSource?: string | string[];
  optionsSourceGroups?: string[];
  optionsSourceLabelTemplate?: string;
  optionsSourceValueField?: string;
  optionsExcludeCurrent?: boolean;
  defaultValue?: string | number | boolean;
  fields?: FormFieldSchema[];
  repeatable?: boolean;
  minItems?: number;
  itemLabel?: string;
  sectionTitle?: string;
  columns?: number;
  mask?: string;
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  submitLabel: string;
  fields: FormFieldSchema[];
}

export const formTemplates: Record<string, FormSchema> = {
  [kansasPps1001.id]: kansasPps1001 as FormSchema,
  ['kansas/' + kansasPps1001.id]: kansasPps1001 as FormSchema,
};

export function getFormTemplate(id: string): FormSchema | undefined {
  return formTemplates[id];
}
