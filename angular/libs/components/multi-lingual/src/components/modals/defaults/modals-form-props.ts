import { ABP } from '@abp/ng.core';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { MultiLingual } from '../../../models/models';

export function GenerateForm(data: MultiLingual.MultiLingualDefinition): FormProp<ABP.Dictionary<string>>[]
{
  return FormProp.createMany<ABP.Dictionary<string>>(
    [
      ...MODELS_EDIT_FORM_PROPS,
      ...data.properties.map(x => {
        return new FormProp({
          type: x.dataType.toLowerCase() as ePropType,
          name: x.name,
          id: x.name,
          displayName: x.name,
        })
      }),
      new FormProp({
        type: "html" as ePropType,
        name: "edit",
        id: "edit",
        displayName: "Edit",
      })
    ]
  );
}

export const MODELS_EDIT_FORM_PROPS = FormProp.createMany<ABP.Dictionary<string>>([
]);
