import { ConfigStateService } from '@abp/ng.core';
import { ExtensionsService, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, } from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { map, mapTo, tap } from 'rxjs/operators';
import { DEFAULT_BLOG_CREATE_FORM_PROPS } from '../default/blog/default-blog-create-form-props';
import { DEFAULT_BLOG_EDIT_FORM_PROPS } from '../default/blog/default-blog-edit-form-props';
import { DEFAULT_BLOG_ENTITY_PROPS } from '../default/blog/default-blog-entity-props';
import { DEFAULT_BLOG_ENTITY_ACTIONS } from '../default/blog/default-blog-entity-actions';
import { DEFAULT_BLOG_TOOLBAR_ACTIONS } from '../default/blog/default-blog-toolbar-actions';
import { DEFAULT_POST_CREATE_FORM_PROPS } from '../default/post/default-post-create-form-props';
import { DEFAULT_POST_EDIT_FORM_PROPS } from '../default/post/default-post-edit-form-props';
import { DEFAULT_POST_ENTITY_PROPS } from '../default/post/default-post-entity-props';
import { DEFAULT_POST_ENTITY_ACTIONS } from '../default/post/default-post-entity-actions';
import { DEFAULT_POST_TOOLBAR_ACTIONS } from '../default/post/default-post-toolbar-actions';
import { DEFAULT_TAG_CREATE_FORM_PROPS } from '../default/tag/default-tag-create-form-props';
import { DEFAULT_TAG_EDIT_FORM_PROPS } from '../default/tag/default-tag-edit-form-props';
import { DEFAULT_TAG_ENTITY_PROPS } from '../default/tag/default-tag-entity-props';
import { DEFAULT_TAG_ENTITY_ACTIONS } from '../default/tag/default-tag-entity-actions';
import { DEFAULT_TAG_TOOLBAR_ACTIONS } from '../default/tag/default-tag-toolbar-actions';
export const EXTENSIONS_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configure,
        deps: [Injector],
        multi: true,
    },
];
function configure(injector) {
    return () => {
        const extensions = injector.get(ExtensionsService);
        const configState = injector.get(ConfigStateService);
        return getObjectExtensionEntitiesFromStore(configState, 'Cms')
            .pipe(map((entities) => ({})), mapEntitiesToContributors(configState, 'Cms'), tap((objectExtensionContributors) => {
            mergeWithDefaultActions(extensions.toolbarActions, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_TOOLBAR_ACTIONS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_TOOLBAR_ACTIONS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_ACTIONS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_ACTIONS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_CREATE_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_CREATE_FORM_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_EDIT_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_EDIT_FORM_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_EDIT_FORM_PROPS,
            });
        }), mapTo(true))
            .toPromise();
    };
}
//# sourceMappingURL=extensions.provider.js.map