import {
  EntityAction,
  ToolbarAction,
  EntityProp,
  FormProp,
  ExtensionsService,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
  EXTENSIONS_IDENTIFIER,
  EntityActionList,
  EntityPropList,
  ActionData,
  FormPropOptions,
  EntityPropOptions,
} from '@abp/ng.theme.shared/extensions';
import { Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent, ActionEventHub } from '../providers/action-event.hub';
import { Extensions } from '../models/models';

export type Contributors<R = any> = {
  actionContributors?: (actionList: EntityActionList<R>) => void;
  toolbarContributors?: (actionList: EntityActionList<R>) => void;
  propContributors?: (propList: EntityPropList<R>) => void;
  createFormContributors?: (propList: EntityPropList<R>) => void;
  editFormContributors?: (propList: EntityPropList<R>) => void;
};
//todo : remove
export function setDefaults<R>(
  injector: Injector,
  key: string,
  defaults: Extensions.Defaults<R>
): Subject<ActionEvent<R>> {
  const extensions = injector.get(ExtensionsService);

  const actionEventHub = injector.get(ActionEventHub);

  const contributors = actionEventHub.GetContributors(key) ?? {};

  const _defaults = {
    entityAction: {},
    toolbarActions: {},
    entityProps: {},
    createFormProps: {},
    editFormProps: {},
  };

  Object.keys(defaults).forEach((p) => {
    _defaults[p] = { [key]: defaults[p] };
  });

  const _contributors = {
    actionContributors: {},
    toolbarContributors: {},
    propContributors: {},
    createFormContributors: {},
    editFormContributors: {},
  };

  Object.keys(contributors).forEach((p) => {
    _contributors[p] = { [key]: [contributors[p]] };
  });

  mergeWithDefaultActions(
    extensions.entityActions,
    _defaults.entityAction,
    _contributors.actionContributors
  );

  mergeWithDefaultActions(
    extensions.toolbarActions,
    _defaults.toolbarActions,
    _contributors.toolbarContributors
  );

  mergeWithDefaultProps(
    extensions.entityProps,
    _defaults.entityProps,
    //objectExtensionContributors.prop
    _contributors.propContributors
  );

  mergeWithDefaultProps(
    extensions.createFormProps,
    _defaults.createFormProps,
    //objectExtensionContributors.createForm
    _contributors.createFormContributors
  );

  mergeWithDefaultProps(
    extensions.editFormProps,
    _defaults.editFormProps,
    //objectExtensionContributors.editForm
    _contributors.editFormContributors
  );

  return actionEventHub.Register(key);
}

export function setContributors<R>(
  injector: Injector,
  key: string,
  contributors: Contributors<R>
) {
  const actionEventHub: ActionEventHub<R> = injector.get(ActionEventHub);

  let _contributors = {
    actionContributors: {},
    toolbarContributors: {},
    propContributors: {},
    createFormContributors: {},
    editFormContributors: {},
  };

  _contributors = { ..._contributors, ...contributors };
  actionEventHub.AddContributors(key, contributors);

  return actionEventHub.Register(key);
}

export function notify(method: string) {
  return (data: ActionData) => {
    let actionEventHub = data.getInjected(ActionEventHub);
    let key = data.getInjected(EXTENSIONS_IDENTIFIER);
    actionEventHub.Notify(key, {
      method: method,
      data: data,
    });
  };
}

export function CreateFormProp<R>(
  options: FormPropOptions<R>[]
): FormProp<R>[] {
  return FormProp.createMany<R>(options);
}

export function CreateEntityProp<R>(
  options: EntityPropOptions<R>[]
): EntityProp<R>[] {
  return EntityProp.createMany<R>(options);
}

export const PAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<any>([
  {
    text: 'CmsKit::NewPage',
    action: notify('Create'),
    permission: 'CmsKit.Pages.Create',
    icon: 'fa fa-plus',
  },
]);
