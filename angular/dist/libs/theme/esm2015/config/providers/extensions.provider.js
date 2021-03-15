import { ConfigStateService } from '@abp/ng.core';
import { ExtensionsService, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, } from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { map, mapTo, tap } from 'rxjs/operators';
import { DEFAULT_BANNER_CREATE_FORM_PROPS } from '../default/banner/default-banner-create-form-props';
import { DEFAULT_BANNER_EDIT_FORM_PROPS } from '../default/banner/default-banner-edit-form-props';
import { DEFAULT_BANNER_ENTITY_PROPS } from '../default/banner/default-banner-entity-props';
import { DEFAULT_BANNER_ENTITY_ACTIONS } from '../default/banner/default-banner-entity-actions';
import { DEFAULT_BANNER_TOOLBAR_ACTIONS } from '../default/banner/default-banner-toolbar-actions';
import { DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS } from '../default/bannerdefinition/default-bannerdefinition-create-form-props';
import { DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS } from '../default/bannerdefinition/default-bannerdefinition-edit-form-props';
import { DEFAULT_BANNERDEFINITION_ENTITY_PROPS } from '../default/bannerdefinition/default-bannerdefinition-entity-props';
import { DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS } from '../default/bannerdefinition/default-bannerdefinition-entity-actions';
import { DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS } from '../default/bannerdefinition/default-bannerdefinition-toolbar-actions';
import { DEFAULT_ROUTE_CREATE_FORM_PROPS } from '../default/route/default-route-create-form-props';
import { DEFAULT_ROUTE_EDIT_FORM_PROPS } from '../default/route/default-route-edit-form-props';
import { DEFAULT_ROUTE_ENTITY_PROPS } from '../default/route/default-route-entity-props';
import { DEFAULT_ROUTE_ENTITY_ACTIONS } from '../default/route/default-route-entity-actions';
import { DEFAULT_ROUTE_TOOLBAR_ACTIONS } from '../default/route/default-route-toolbar-actions';
import { DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS } from '../default/routedefinition/default-routedefinition-create-form-props';
import { DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS } from '../default/routedefinition/default-routedefinition-edit-form-props';
import { DEFAULT_ROUTEDEFINITION_ENTITY_PROPS } from '../default/routedefinition/default-routedefinition-entity-props';
import { DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS } from '../default/routedefinition/default-routedefinition-entity-actions';
import { DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS } from '../default/routedefinition/default-routedefinition-toolbar-actions';
import { DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS } from '../default/websitedefinition/default-websitedefinition-create-form-props';
import { DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS } from '../default/websitedefinition/default-websitedefinition-edit-form-props';
import { DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS } from '../default/websitedefinition/default-websitedefinition-entity-props';
import { DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS } from '../default/websitedefinition/default-websitedefinition-entity-actions';
import { DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS } from '../default/websitedefinition/default-websitedefinition-toolbar-actions';
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
        return getObjectExtensionEntitiesFromStore(configState, 'Theme')
            .pipe(map((entities) => ({})), mapEntitiesToContributors(configState, 'Theme'), tap((objectExtensionContributors) => {
            mergeWithDefaultActions(extensions.toolbarActions, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_ENTITY_ACTIONS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_ENTITY_ACTIONS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_ENTITY_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_ENTITY_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_ENTITY_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_ENTITY_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS,
            });
        }), mapTo(true))
            .toPromise();
    };
}
//# sourceMappingURL=extensions.provider.js.map