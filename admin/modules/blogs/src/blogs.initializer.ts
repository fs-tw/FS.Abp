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
import { ePostsComponents } from './enums/component-names';
// import {
//   FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
//   FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
//   DEFAULT_FILE_MANAGEMENT_ENTITY_ACTIONS,
//   DEFAULT_FILE_MANAGEMENT_ENTITY_PROPS,
//   DEFAULT_FILE_MANAGEMENT_TOOLBAR_ACTIONS,
//   FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
// } from './tokens/extensions.token';
// import {
//   FileManagementEntityPropContributors,
//   FileManagementEntityActionContributors,
//   FileManagementToolbarActionContributors,
// } from './models/config-options';
import { ConfigStateService } from '@abp/ng.core';

import { DEFAULT_BLOGS_ENTITY_PROPS } from './defaults/blogs/default-blogs-entity-props';
import { DEFAULT_BLOGS_TOOLBAR_ACTIONS } from './defaults/blogs/default-blogs-toolbar-actions';
import { DEFAULT_BLOGS_ENTITY_ACTIONS } from './defaults/blogs/default-blogs-entity-actions';
import {
  DEFAULT_BLOGS_CREATE_FORM_PROPS,
  DEFAULT_BLOGS_EDIT_FORM_PROPS,
} from './defaults/blogs/default-blogs-form-props';

import { DEFAULT_BLOG_POSTS_ENTITY_PROPS } from './defaults/blog-posts/default-blog-posts-entity-props';
import { DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS } from './defaults/blog-posts/default-blog-posts-toolbar-actions';
import { DEFAULT_BLOG_POSTS_ENTITY_ACTIONS } from './defaults/blog-posts/default-blog-posts-entity-actions';
import {
  DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS,
  DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS,
} from './defaults/blog-posts/default-blog-posts-form-props';

@Injectable()
export class BlogsInitializer implements CanActivate {
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
          [ePostsComponents.Blogs]: DEFAULT_BLOGS_ENTITY_ACTIONS,
          [ePostsComponents.BlogPosts]: DEFAULT_BLOG_POSTS_ENTITY_ACTIONS,
          //actionContributors
        });
        mergeWithDefaultActions(
          extensions.toolbarActions,
          {
            [ePostsComponents.Blogs]: DEFAULT_BLOGS_TOOLBAR_ACTIONS,
            [ePostsComponents.BlogPosts]: DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS,
          }
          //toolbarContributors
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          {
            [ePostsComponents.Blogs]: DEFAULT_BLOGS_ENTITY_PROPS,
            [ePostsComponents.BlogPosts]: DEFAULT_BLOG_POSTS_ENTITY_PROPS,
          },objectExtensionContributors.prop,
          //propContributors
        );
        mergeWithDefaultProps(extensions.createFormProps, {
          [ePostsComponents.Blogs]: DEFAULT_BLOGS_CREATE_FORM_PROPS,
          [ePostsComponents.BlogPosts]: DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS
        },objectExtensionContributors.createForm);

        mergeWithDefaultProps(extensions.editFormProps, {
          [ePostsComponents.Blogs]: DEFAULT_BLOGS_EDIT_FORM_PROPS,
          [ePostsComponents.BlogPosts]: DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS
          
        },objectExtensionContributors.editForm);
      }),
      mapTo(true)
    );
  }
}
