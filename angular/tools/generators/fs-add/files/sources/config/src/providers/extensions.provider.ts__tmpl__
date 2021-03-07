// import { ConfigStateService } from '@abp/ng.core';
// import {
//   ExtensionsService,
//   getObjectExtensionEntitiesFromStore,
//   mapEntitiesToContributors,
//   mergeWithDefaultActions,
//   mergeWithDefaultProps,
// } from '@abp/ng.theme.shared/extensions';
// import { APP_INITIALIZER, Injector } from '@angular/core';
// import { eCmsRouteNames } from '../enums/route-names';
// import { map, mapTo, tap } from 'rxjs/operators';

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


// export const EXTENSIONS_PROVIDERS = [
//   {
//     provide: APP_INITIALIZER,
//     useFactory: configure,
//     deps: [Injector],
//     multi: true,
//   },
// ];

// function configure(injector: Injector) {
//   return () => {
//     const extensions: ExtensionsService = injector.get(ExtensionsService);
//     const configState = injector.get(ConfigStateService);

//     return getObjectExtensionEntitiesFromStore(configState, 'Cms')
//       .pipe(
//         map((entities) => ({})),
//         mapEntitiesToContributors(configState, 'Cms'),
//         tap((objectExtensionContributors) => {
//           mergeWithDefaultActions(extensions.toolbarActions, {
//             [eCmsRouteNames.Blog]: DEFAULT_BLOG_TOOLBAR_ACTIONS,
//             [eCmsRouteNames.Post]: DEFAULT_POST_TOOLBAR_ACTIONS,
//             [eCmsRouteNames.tag]: DEFAULT_TAG_TOOLBAR_ACTIONS,
//           });

//           mergeWithDefaultActions(extensions.entityActions, {
//             [eCmsRouteNames.Blog]: DEFAULT_BLOG_ENTITY_ACTIONS,
//             [eCmsRouteNames.Post]: DEFAULT_POST_ENTITY_ACTIONS,
//             [eCmsRouteNames.tag]: DEFAULT_TAG_ENTITY_ACTIONS,
           
//           });

//           mergeWithDefaultProps(extensions.entityProps, {
//             [eCmsRouteNames.Blog]: DEFAULT_BLOG_ENTITY_PROPS,
//             [eCmsRouteNames.Post]: DEFAULT_POST_ENTITY_PROPS,
//             [eCmsRouteNames.tag]: DEFAULT_TAG_ENTITY_PROPS,
//           });

//           mergeWithDefaultProps(extensions.createFormProps, {
//             [eCmsRouteNames.Blog]: DEFAULT_BLOG_CREATE_FORM_PROPS,
//             [eCmsRouteNames.Post]: DEFAULT_POST_CREATE_FORM_PROPS,
//             [eCmsRouteNames.tag]: DEFAULT_TAG_CREATE_FORM_PROPS,
//           });

//           mergeWithDefaultProps(extensions.editFormProps, {
//             [eCmsRouteNames.Blog]: DEFAULT_BLOG_EDIT_FORM_PROPS,
//             [eCmsRouteNames.Post]: DEFAULT_POST_EDIT_FORM_PROPS,
//             [eCmsRouteNames.tag]: DEFAULT_TAG_EDIT_FORM_PROPS,
//           });
//         }),
//         mapTo(true)
//       )
//       .toPromise();
//   };
// }
