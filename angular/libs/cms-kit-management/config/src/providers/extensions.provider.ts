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

import { DEFAULT_BLOG_POSTS_ENTITY_PROPS } from '../defaults/blog-posts/default-blog-posts-entity-props';
import { DEFAULT_BLOGS_ENTITY_PROPS } from '../defaults/blogs/default-blogs-entity-props';
import { DEFAULT_TAGS_ENTITY_PROPS } from '../defaults/tags/default-tags-entity-props';
import { DEFAULT_COMMENTS_ENTITY_PROPS } from '../defaults/comments/default-comments-entity-props';

// import { DEFAULT_BLOG_CREATE_FORM_PROPS } from '../default/blog/default-blog-create-form-props';
// import { DEFAULT_BLOG_EDIT_FORM_PROPS } from '../default/blog/default-blog-edit-form-props';
// import { DEFAULT_BLOG_ENTITY_PROPS } from '../default/blog/default-blog-entity-props';
// import { DEFAULT_BLOG_ENTITY_ACTIONS } from '../default/blog/default-blog-entity-actions';
// import { DEFAULT_BLOG_TOOLBAR_ACTIONS } from '../default/blog/default-blog-toolbar-actions';

// import { DEFAULT_POST_CREATE_FORM_PROPS } from '../default/post/default-post-create-form-props';
// import { DEFAULT_POST_EDIT_FORM_PROPS } from '../default/post/default-post-edit-form-props';
// import { DEFAULT_POST_ENTITY_PROPS } from '../default/post/default-post-entity-props';
// import { DEFAULT_POST_ENTITY_ACTIONS } from '../default/post/default-post-entity-actions';
// import { DEFAULT_POST_TOOLBAR_ACTIONS } from '../default/post/default-post-toolbar-actions';

// import { DEFAULT_TAG_CREATE_FORM_PROPS } from '../default/tag/default-tag-create-form-props';
// import { DEFAULT_TAG_EDIT_FORM_PROPS } from '../default/tag/default-tag-edit-form-props';
// import { DEFAULT_TAG_ENTITY_PROPS } from '../default/tag/default-tag-entity-props';
// import { DEFAULT_TAG_ENTITY_ACTIONS } from '../default/tag/default-tag-entity-actions';
// import { DEFAULT_TAG_TOOLBAR_ACTIONS } from '../default/tag/default-tag-toolbar-actions';

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

    return getObjectExtensionEntitiesFromStore(configState, 'cms-kit')
      .pipe(
        map((entities) => ({})),
        mapEntitiesToContributors(configState, 'cms-kit'),
        tap((objectExtensionContributors) => {

          mergeWithDefaultProps(extensions.entityProps, {
            [eCmsKitComponents.BlogPosts]: DEFAULT_BLOG_POSTS_ENTITY_PROPS,
            [eCmsKitComponents.Blogs]: DEFAULT_BLOGS_ENTITY_PROPS,
            [eCmsKitComponents.Comments]: DEFAULT_COMMENTS_ENTITY_PROPS,
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_ENTITY_PROPS,
            [eCmsKitComponents.Tags]: DEFAULT_TAGS_ENTITY_PROPS
          });

          mergeWithDefaultActions(extensions.entityActions, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_ENTITY_ACTIONS,
           
          });

          mergeWithDefaultActions(extensions.toolbarActions, {
            [eCmsKitComponents.Pages]: DEFAULT_PAGES_TOOLBAR_ACTIONS
           
          });

        }),
        mapTo(true)
      )
      .toPromise();
  };
}
