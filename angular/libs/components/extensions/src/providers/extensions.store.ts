import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { Injectable, Injector, Testability, Type } from '@angular/core';
import { AbstractNavTreeService, ABP } from '@abp/ng.core';
import { combineLatest, forkJoin, Observable, Subject } from 'rxjs';
import {
  ExtensionsService,
  mergeWithDefaultProps,
  mergeWithDefaultActions,
  FormProps,
  CreateFormPropsFactory,
} from '@abp/ng.theme.shared/extensions';
import { ActionEventHub, ActionEvent } from './action-event.hub';
import {
  CreateEntityProp,
  CreateFormProp,
  notify,
  PAGES_TOOLBAR_ACTIONS,
} from '../utils/defaults.util';
import { Extensions } from '../models/models';

// export class EntityDefinition implements Extensions.EntityDefinition {
//   name: string;
//   entityType?: string;
//   appServiceType?: string;
//   createFormProps: Extensions.EntityPropertyDefinition[];
//   searchFormProps: Extensions.EntityPropertyDefinition[];
//   listProps: Extensions.EntityPropertyDefinition[];

//   // constructor(
//   //   name: string,
//   //   createFormProps: Fs.Abp.EntityTypes.EntityPropertyDefinition[],
//   //   searchFormProps: Fs.Abp.EntityTypes.EntityPropertyDefinition[],
//   //   _listProps: Fs.Abp.EntityTypes.EntityPropertyDefinition[]
//   // ) {
//   //   this.name = name;
//   //   this.entityType = name;
//   //   this.createFormProps = createFormProps;
//   //   this.searchFormProps = searchFormProps;

//   //   let listPropsOptions = [];
//   //   _listProps
//   //     .filter((x) => x.visible)
//   //     .forEach((val) => listPropsOptions.push(Object.assign({}, val)));

//   //   listPropsOptions.forEach((p) => {
//   //     p['visible'] = ((d) => {
//   //       return _listProps.find((x) => x.name == p.name).visible;
//   //     }) as any;
//   //   });
//   //   this.listProps = listPropsOptions;
//   // }
// }

export class SearchFormPropsFactory<R = any> extends CreateFormPropsFactory<R> {
  protected _ctor: Type<FormProps<R>>;
}

@Injectable({ providedIn: 'root' })
export class ExtensionsStore extends AbstractNavTreeService<Extensions.EntityDefinition> {
  readonly searchFormProps = new SearchFormPropsFactory();
  readonly extensions: ExtensionsService = null;
  readonly actionEventHub: ActionEventHub<any> = null;
  readonly extraData: ABP.Dictionary<any> = {};
  get entityActions() {
    return this.extensions.entityActions;
  }

  get toolbarActions() {
    return this.extensions.toolbarActions;
  }

  get entityProps() {
    return this.extensions.entityProps;
  }

  get createFormProps() {
    return this.extensions.createFormProps;
  }

  get editFormProps() {
    return this.extensions.editFormProps;
  }

  constructor(injector: Injector) {
    super(injector);
    this.extensions = this.injector.get(ExtensionsService);
    this.actionEventHub = this.injector.get(ActionEventHub);
  }

  setDefaultsbyStore(): void {
    this.flat.forEach((d) => {
      let key = d.appServiceType;
      let entityProps = { [key]: CreateEntityProp(d.listProps as any) };
      let searchFormProps = { [key]: CreateFormProp(d.searchFormProps as any) };
      let createFormProps = { [key]: CreateFormProp(d.createFormProps as any) };
      let toolbarActions = { [key]: PAGES_TOOLBAR_ACTIONS };

      mergeWithDefaultProps(this.extensions.entityProps, entityProps, {});

      mergeWithDefaultProps(this.searchFormProps, searchFormProps, {});

      mergeWithDefaultProps(
        this.extensions.createFormProps,
        createFormProps,
        {}
      );

      // mergeWithDefaultActions(extensions.toolbarActions, toolbarActions, {});
    });
  }

  setDefaults<R>(
    key: string,
    defaults: Extensions.Defaults<R>,
    extraData: ABP.Dictionary = null
  ): Subject<ActionEvent<R>> {
    if (!!extraData) this.extraData[key] = extraData;
    const actionEventHub = this.injector.get(ActionEventHub);
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

    mergeWithDefaultActions(this.entityActions, _defaults.entityAction, {});

    mergeWithDefaultActions(this.toolbarActions, _defaults.toolbarActions, {});

    mergeWithDefaultProps(this.entityProps, _defaults.entityProps, {});

    mergeWithDefaultProps(this.createFormProps, _defaults.createFormProps, {});

    mergeWithDefaultProps(this.editFormProps, _defaults.editFormProps, {});

    return actionEventHub.Register(key);
  }
}
