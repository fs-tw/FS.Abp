import { Fs, Volo } from '@fs-tw/entity-type-management/proxy/entity-types';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { AbstractNavTreeService } from '@abp/ng.core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import {
  ExtensionsService,
  FormPropOptions,
  FormProp,
  mergeWithDefaultProps,
  ToolbarAction,
  mergeWithDefaultActions,
} from '@abp/ng.theme.shared/extensions';
import { ActionEventHub, notify } from '@fs-tw/components/extensions';

export class EntityDefinition
  implements Fs.Abp.EntityTypes.Dtos.EntityDefinitionDto
{
  name: string;
  entityType?: string;
  createFormProps: Fs.Abp.EntityTypes.EntityPropertyDefinition[];
  constructor(
    name: string,
    createFormProps: Fs.Abp.EntityTypes.EntityPropertyDefinition[]
  ) {
    this.name = name;
    this.entityType = name;
    this.createFormProps = createFormProps;
  }
}

@Injectable({ providedIn: 'root' })
export class EntityDefinitionStore extends AbstractNavTreeService<EntityDefinition> {
  constructor(injector: Injector) {
    super(injector);  
  }


  setDefaults(): void {
    const extensions = this.injector.get(ExtensionsService);
    //const actionEventHub = this.injector.get(ActionEventHub);
    this.flat.forEach((d) => {
      let key = d.entityType;
      let createFormProp = { [key]: CreateFormProp(d.createFormProps as any) };
      let toolbarActions = { [key]: PAGES_TOOLBAR_ACTIONS };

      mergeWithDefaultProps(
        extensions.createFormProps,
        createFormProp,
        {}
      );

      //mergeWithDefaultActions(extensions.toolbarActions, toolbarActions, {});
    });
  }
}

export function CreateFormProp<R>(
  options: FormPropOptions<R>[]
): FormProp<R>[] {
  return FormProp.createMany<R>(options);
}

export const PAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<any>([
  {
    text: 'CmsKit::NewPage',
    action: notify('Create'),
    permission: 'CmsKit.Pages.Create',
    icon: 'fa fa-plus',
  },
]);
