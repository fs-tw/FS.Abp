import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { MultiLingualInfo } from '@fs-tw/components/multi-lingual/proxy';

export function GenerateForm(data: MultiLingualInfo): FormProp<any>[]
{
  return FormProp.createMany<any>(
    [
      ...MODELS_EDIT_FORM_PROPS,
      ...data.properties.map(x => {
        return new FormProp({
          type: x.dataType.toLowerCase() as ePropType,
          name: x.name,
          id: x.name,
          displayName: x.name,
        })
      })
    ]
  );
}

export const MODELS_EDIT_FORM_PROPS = FormProp.createMany<any>([
]);
