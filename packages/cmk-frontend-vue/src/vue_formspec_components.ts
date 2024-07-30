/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Components =
  | Integer
  | Float
  | String
  | Dictionary
  | List
  | LegacyValuespec
  | SingleChoice
  | CascadingSingleChoice
  | FixedValue;
export type Integer = FormSpec & {
  type: "integer";
  label?: string;
  unit?: string;
  input_hint?: string;
};
export type Validators = IsInteger | IsFloat | NumberInRange | LengthInRange;
export type Float = FormSpec & {
  type: "float";
  label?: string;
  unit?: string;
  input_hint?: string;
};
export type String = FormSpec & {
  type: "string";
  placeholder?: string;
  input_hint?: string;
};
export type Dictionary = FormSpec & {
  type: "dictionary";
  elements: DictionaryElement[];
  no_elements_text?: string;
  additional_static_elements?: {};
};
export type List = FormSpec & {
  type: "list";
  element_template: FormSpec;
  element_default_value: unknown;
  editable_order: boolean;
  add_element_label: string;
  remove_element_label: string;
  no_element_label: string;
};
export type LegacyValuespec = FormSpec & {
  type: "legacy_valuespec";
  input_html?: string;
  readonly_html?: string;
  varprefix: string;
};
export type SingleChoice = FormSpec & {
  type: "single_choice";
  elements: SingleChoiceElement[];
  no_elements_text?: string;
  frozen: boolean;
  label?: string;
  input_hint: unknown;
};
export type CascadingSingleChoice = FormSpec & {
  type: "cascading_single_choice";
  elements: CascadingSingleChoiceElement[];
  no_elements_text?: string;
  label?: string;
  input_hint: unknown;
};
export type FixedValue = FormSpec & {
  type: "fixed_value";
  label?: string;
  value: unknown;
};

export interface VueFormspecComponents {
  components?: Components;
  validation_message?: ValidationMessage;
}
export interface FormSpec {
  type: string;
  title: string;
  help: string;
  validators: Validators[];
}
export interface IsInteger {
  type: "is_integer";
  error_message?: string;
}
export interface IsFloat {
  type: "is_float";
  error_message?: string;
}
export interface NumberInRange {
  type: "number_in_range";
  min_value?: number;
  max_value?: number;
  error_message?: string;
}
export interface LengthInRange {
  type: "length_in_range";
  min_value?: number;
  max_value?: number;
  error_message?: string;
}
export interface DictionaryElement {
  ident: string;
  required: boolean;
  default_value: unknown;
  parameter_form: FormSpec;
}
export interface SingleChoiceElement {
  name: string;
  title: string;
}
export interface CascadingSingleChoiceElement {
  name: string;
  title: string;
  default_value: unknown;
  parameter_form: FormSpec;
}
export interface ValidationMessage {
  location: string[];
  message: string;
  invalid_value: unknown;
}
