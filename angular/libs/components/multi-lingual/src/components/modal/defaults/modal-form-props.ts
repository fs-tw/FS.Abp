import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { MultiLingualInfo } from '../../providers';

export function GenerateForm(data: MultiLingualInfo): FormProp<any>[]
{
  return FormProp.createMany<any>(
    [
      ...MODAL_EDIT_FORM_PROPS,
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

export const MODAL_EDIT_FORM_PROPS = FormProp.createMany<any>([
]);
