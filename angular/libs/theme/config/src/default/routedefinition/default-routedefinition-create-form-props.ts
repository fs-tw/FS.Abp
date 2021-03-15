import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';

export const DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.Routes.Dtos.RouteDefinitionDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Theme::FS.RouteDefinition.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Theme::FS.RouteDefinition.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Theme::FS.RouteDefinition.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName:'Theme::FS.RouteDefinition.Disable',
    id: 'disable',
    defaultValue: "",
  }
]);