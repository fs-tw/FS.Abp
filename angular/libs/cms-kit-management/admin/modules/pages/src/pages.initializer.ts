import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { Injectable, Injector } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { ePagesComponents } from './enums/component-names';
import { ConfigStateService } from '@abp/ng.core';
import { DEFAULT_PAGES_ENTITY_ACTIONS } from './defaults/pages/default-pages-entity-actions';
import { DEFAULT_PAGES_TOOLBAR_ACTIONS } from './defaults/pages/default-pages-toolbar-actions';
import { DEFAULT_PAGES_ENTITY_PROPS } from './defaults/pages/default-pages-entity-props';
import { DEFAULT_PAGES_CREATE_FORM_PROPS } from './defaults/pages/default-pages-form-props';
import { DEFAULT_PAGES_EDIT_FORM_PROPS } from './defaults/pages/default-pages-form-props';

@Injectable()
export class PagesInitializer implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);
    // const actionContributors: FileManagementEntityActionContributors =
    //   this.injector.get(FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, null) || {};
    // const toolbarContributors: FileManagementToolbarActionContributors =
    //   this.injector.get(FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, null) ||
    //   {};
    // const propContributors: FileManagementEntityPropContributors =
    //   this.injector.get(FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, null) || {};

    const configStateService = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(
      configStateService,
      'cms-kit-management'
    ).pipe(
      map((entities) => ({
        /**
         * TODO: uncomment following statement with correct entity name
         * Following statement is commented out on 02 Sept 2020
         * It
         */
        // [eFileManagementComponents.FolderContent]: entities.DirectoryContentDto,
      })),
      mapEntitiesToContributors(configStateService, 'cms-kit-management'),
      tap((objectExtensionContributors) => {
        mergeWithDefaultActions(extensions.entityActions, {
          [ePagesComponents.Pages]: DEFAULT_PAGES_ENTITY_ACTIONS,
          //actionContributors
        });
        mergeWithDefaultActions(
          extensions.toolbarActions,
          {
            [ePagesComponents.Pages]: DEFAULT_PAGES_TOOLBAR_ACTIONS,
          }
          //toolbarContributors
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          {
            [ePagesComponents.Pages]: DEFAULT_PAGES_ENTITY_PROPS,
          },objectExtensionContributors.prop,
          //propContributors
        );
        mergeWithDefaultProps(extensions.createFormProps, {
          [ePagesComponents.Pages]: DEFAULT_PAGES_CREATE_FORM_PROPS,
        },objectExtensionContributors.createForm);

        mergeWithDefaultProps(extensions.editFormProps, {
          [ePagesComponents.Pages]: DEFAULT_PAGES_EDIT_FORM_PROPS,
          
        },objectExtensionContributors.editForm);
      }),
      mapTo(true)
    );
  }
}
