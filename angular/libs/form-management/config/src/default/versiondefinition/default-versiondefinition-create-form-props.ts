import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';

export const DEFAULT_VERSIONDEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.FormManagement.Versions.Dtos.VersionDefinitionDto>([
  
  {
    type: ePropType.String,
    name: 'currentVersionId',
    displayName:'FormManagement::FS.VersionDefinition.CurrentVersionId',
    id: 'currentVersionId',
    defaultValue: "",
  },
   {
    type: ePropType.String,
    name: 'entityType',
    displayName: 'FormManagement::FS.VersionDefinition.EntityType',
    id: 'entityType',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'entityKey',
    displayName: 'FormManagement::FS.VersionDefinition.EntityKey',
    id: 'entityKey',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName:'FormManagement::FS.VersionDefinition.DisplayName',
    id: 'displayName',
    defaultValue: "",
  },

]);