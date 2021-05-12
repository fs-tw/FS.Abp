import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { map, mapTo, tap } from 'rxjs/operators';
import { eCmsKitComponents } from '../enums/components';

import { DEFAULT_PAGES_ENTITY_PROPS } from '../defaults/pages/default-pages-entity-props';
import { DEFAULT_PAGES_TOOLBAR_ACTIONS } from '../defaults/pages/default-pages-toolbar-actions';
import { DEFAULT_PAGES_ENTITY_ACTIONS } from '../defaults/pages/default-pages-entity-actions';
import {
  DEFAULT_PAGES_CREATE_FORM_PROPS,
  DEFAULT_PAGES_EDIT_FORM_PROPS,
} from '../defaults/pages/default-pages-form-props';

import { DEFAULT_BLOGS_ENTITY_PROPS } from '../defaults/blogs/default-blogs-entity-props';
import { DEFAULT_BLOGS_TOOLBAR_ACTIONS } from '../defaults/blogs/default-blogs-toolbar-actions';
import { DEFAULT_BLOGS_ENTITY_ACTIONS } from '../defaults/blogs/default-blogs-entity-actions';
import {
  DEFAULT_BLOGS_CREATE_FORM_PROPS,
  DEFAULT_BLOGS_EDIT_FORM_PROPS
} from '../defaults/blogs/default-blogs-form-props';

import { DEFAULT_BLOG_POSTS_ENTITY_PROPS } from '../defaults/blog-posts/default-blog-posts-entity-props';
import { DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS } from '../defaults/blog-posts/default-blog-posts-toolbar-actions';
import { DEFAULT_BLOG_POSTS_ENTITY_ACTIONS } from '../defaults/blog-posts/default-blog-posts-entity-actions';
import {
  DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS,
  DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS
} from '../defaults/blog-posts/default-blog-posts-form-props';


import { DEFAULT_TAGS_ENTITY_PROPS } from '../defaults/tags/default-tags-entity-props';
import { DEFAULT_COMMENTS_ENTITY_PROPS } from '../defaults/comments/default-comments-entity-props';
import { of } from 'rxjs';

export const CMS_KIT_MANAGEMENT_EXTENSIONS_PROVIDERS = [
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

    return getObjectExtensionEntitiesFromStore(configState, 'cms-kit')
      .pipe(
        map((entities) => ({
          [eCmsKitComponents.Pages]: entities.Pages,
          [eCmsKitComponents.Blogs]: entities.Blogs,
          [eCmsKitComponents.BlogPosts]: entities.BlogPosts,
          [eCmsKitComponents.Comments]: entities.Comments,
          [eCmsKitComponents.Tags]: entities.Tags,
        })),
        mapEntitiesToContributors(configState, 'cms-kit'),
        tap(objectExtensionContributors => {
          
          mergeWithDefaultActions(extensions.entityActions, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_ENTITY_ACTIONS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_ENTITY_ACTIONS,
            [eCmsKitComponents.BlogPosts]: DEFAULT_BLOG_POSTS_ENTITY_ACTIONS
          });

          mergeWithDefaultActions(extensions.toolbarActions, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_TOOLBAR_ACTIONS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_TOOLBAR_ACTIONS,
            [eCmsKitComponents.BlogPosts]:DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS
          });

          mergeWithDefaultProps(extensions.entityProps, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_ENTITY_PROPS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_ENTITY_PROPS,
            [eCmsKitComponents.BlogPosts]: DEFAULT_BLOG_POSTS_ENTITY_PROPS,
            [eCmsKitComponents.Comments]: DEFAULT_COMMENTS_ENTITY_PROPS,
            [eCmsKitComponents.Tags]: DEFAULT_TAGS_ENTITY_PROPS,
          },objectExtensionContributors.prop);

          mergeWithDefaultProps(extensions.createFormProps, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_CREATE_FORM_PROPS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_CREATE_FORM_PROPS,
            [eCmsKitComponents.BlogPosts]: DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS
          },objectExtensionContributors.createForm);

          mergeWithDefaultProps(extensions.editFormProps, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_EDIT_FORM_PROPS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_EDIT_FORM_PROPS,
            [eCmsKitComponents.BlogPosts]: DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS
            
          },objectExtensionContributors.editForm);


        }),
        mapTo(true)
      )
      .toPromise();
  };
}
