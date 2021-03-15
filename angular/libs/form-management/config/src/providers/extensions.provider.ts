import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { eFormmanagementRouteNames } from '../enums/route-names';
import { map, mapTo, tap } from 'rxjs/operators';

import { DEFAULT_BANNER_CREATE_FORM_PROPS } from '../default/banner/default-banner-create-form-props';
import { DEFAULT_BANNER_EDIT_FORM_PROPS } from '../default/banner/default-banner-edit-form-props';
import { DEFAULT_BANNER_ENTITY_PROPS } from '../default/banner/default-banner-entity-props';
import { DEFAULT_BANNER_ENTITY_ACTIONS } from '../default/banner/default-banner-entity-actions';
import { DEFAULT_BANNER_TOOLBAR_ACTIONS } from '../default/banner/default-banner-toolbar-actions';


export const EXTENSIONS_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configure,
    deps: [Injector],
    multi: true,
  },
];

function configure(injector: Injector) {
  return () => {
    const extensions: ExtensionsService = injector.get(ExtensionsService);
    const configState = injector.get(ConfigStateService);

    return getObjectExtensionEntitiesFromStore(configState, 'Formmanagement')
      .pipe(
        map((entities) => ({})),
        mapEntitiesToContributors(configState, 'Formmanagement'),
        tap((objectExtensionContributors) => {
          mergeWithDefaultActions(extensions.toolbarActions, {
            [eFormmanagementRouteNames.Banner]: DEFAULT_BANNER_TOOLBAR_ACTIONS,
            
            
          });

          mergeWithDefaultActions(extensions.entityActions, {
            [eFormmanagementRouteNames.Banner]: DEFAULT_BANNER_ENTITY_ACTIONS,
            
          
           
          });

          mergeWithDefaultProps(extensions.entityProps, {
            [eFormmanagementRouteNames.Banner]: DEFAULT_BANNER_ENTITY_PROPS,
           
          });

          mergeWithDefaultProps(extensions.createFormProps, {
            [eFormmanagementRouteNames.Banner]: DEFAULT_BANNER_CREATE_FORM_PROPS,
            
          });

          mergeWithDefaultProps(extensions.editFormProps, {
            [eFormmanagementRouteNames.Banner]: DEFAULT_BANNER_EDIT_FORM_PROPS,
           
           
          });
        }),
        mapTo(true)
      )
      .toPromise();
  };
}
