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
import { eCommentsComponents } from './enums/component-names';
import { ConfigStateService } from '@abp/ng.core';
import { DEFAULT_COMMENTS_ENTITY_PROPS } from './defaults/comments/default-comments-entity-props';

@Injectable()
export class BlogsInitializer implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);

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
        mergeWithDefaultActions(extensions.entityActions, {});
        mergeWithDefaultActions(
          extensions.toolbarActions,
          {}
          //toolbarContributors
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          {
            [eCommentsComponents.Comments]: DEFAULT_COMMENTS_ENTITY_PROPS,
          },
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
