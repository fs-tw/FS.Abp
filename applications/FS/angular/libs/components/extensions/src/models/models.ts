import { ExtensionsStore } from '../providers/extensions.store';
import {EntityAction,ToolbarAction,EntityProp,FormProp} from '@abp/ng.theme.shared/extensions'

export namespace Extensions {
  export interface EntityDefinition {
    name: string;
    appServiceType?: string;
    entityType?: string;
    createType?: string;
    updateType?: string;
    searchType?: string;
    listType?: string;
    createFormProps: EntityPropertyDefinition[];
    searchFormProps: EntityPropertyDefinition[];
    listProps: EntityPropertyDefinition[];
  }

  export interface EntityPropertyDefinition {
    type?: string;
    id?: string;
    name?: string;
    displayName?: string;
    permission?: string;
    sortable: boolean;
    columnWidth: number;
    visible: boolean;
  }
  export type Defaults<R = any> = {
    entityAction?: EntityAction<R>[];
    toolbarActions?: ToolbarAction<R[]>[];
    entityProps?: EntityProp<R>[];
    createFormProps?: FormProp<R>[];
    editFormProps?: FormProp<R>[];
  };
}
