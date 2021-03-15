import { ReplaceableComponentsService, ConfigStateService } from '@abp/ng.core';
//import { Settings } from '@fs/theme.the-project/proxy'
import { APP_INITIALIZER, Injector } from '@angular/core';
//import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { LayoutStateService } from '../service/layout-state.service';
export const UNIFY_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Injector],
        multi: true,
    },
];
export function configureStyles(injector) {
    return () => {
        const replaceableComponents = injector.get(ReplaceableComponentsService);
        const layoutService = injector.get(LayoutStateService);
        const configState = injector.get(ConfigStateService);
        configState
            .createOnUpdateStream(state => state)
            .subscribe(() => {
            //setSkin(layoutService,configState);
        });
        initLayouts(replaceableComponents);
    };
}
function initLayouts(replaceableComponents) {
    replaceableComponents.add({
        key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
        component: ApplicationLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.AccountLayoutComponent" /* AccountLayout */,
        component: ApplicationLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: ApplicationLayoutComponent,
    });
}
//# sourceMappingURL=styles.provider.js.map