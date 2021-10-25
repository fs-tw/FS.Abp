import { ABP } from '@abp/ng.core';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { MultiLingual } from '../../../models/models';

export function GenerateForm(
  data: MultiLingual.MultiLingualDefinition
): FormProp<ABP.Dictionary<string>>[] {
  data.properties[1]['componentKey']='quill-editor';
  return [...MODELS_EDIT_FORM_PROPS, ...MultiLingual.MultiLingualProperty.mapToFormProps(data.properties)];
}

export const MODELS_EDIT_FORM_PROPS = FormProp.createMany<
  ABP.Dictionary<string>
>([]);



