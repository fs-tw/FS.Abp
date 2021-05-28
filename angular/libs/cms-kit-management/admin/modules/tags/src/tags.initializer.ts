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
import { eTagsComponents } from './enums/component-names';
import { ConfigStateService } from '@abp/ng.core';
import { DEFAULT_TAGS_ENTITY_PROPS } from './defaults/tags/default-tags-entity-props';
import {EntityActionsFactory,ToolbarActionsFactory,EntityPropsFactory,CreateFormPropsFactory,EditFormPropsFactory} from '@abp/ng.theme.shared/extensions'
export type Initializer<R=any> = {
  entityActions: EntityActionsFactory<R>;
  toolbarActions: ToolbarActionsFactory<R[]>;
  entityProps: any,//InferredPropDefaults<EntityPropsFactory<any>>;
  createFormProps: CreateFormPropsFactory<R>;
  editFormProps: EditFormPropsFactory<R>;
};

@Injectable()
export class TagsInitializer implements CanActivate {
  private target={
    entityActions:{},
    toolbarActions: {},
    entityProps: {
      [eTagsComponents.Tags]: DEFAULT_TAGS_ENTITY_PROPS,
    },
    createFormProps: {},
    editFormProps: {}
  } as Initializer
  constructor(private injector: Injector) {

  }

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
          //actionContributors
        });
        mergeWithDefaultActions(
          extensions.toolbarActions,
          {}
          //toolbarContributors
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          this.target.entityProps,
          objectExtensionContributors.prop
          //propContributors
        );
        mergeWithDefaultProps(
          extensions.createFormProps,
          {},
          objectExtensionContributors.createForm
        );

        mergeWithDefaultProps(
          extensions.editFormProps,
          {},
          objectExtensionContributors.editForm
        );
      }),
      mapTo(true)
    );
  }
}
