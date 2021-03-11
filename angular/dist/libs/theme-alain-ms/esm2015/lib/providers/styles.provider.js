import { CONTENT_STRATEGY, DomInsertionService, ReplaceableComponentsService, } from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { MSLayoutComponent } from '@fs-tw/theme-alain-ms/layout';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import styles from '../constants/styles';
export const NGALAINMS_THEME_STYLES_PROVIDERS = [
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
        const domInsertion = injector.get(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        initLayouts(replaceableComponents);
    };
}
function initLayouts(replaceableComponents) {
    replaceableComponents.add({
        key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
        component: ApplicationLayoutComponent
    });
    replaceableComponents.add({
        key: "Theme.AccountLayoutComponent" /* AccountLayout */,
        component: AccountLayoutComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: MSLayoutComponent,
    });
}
//# sourceMappingURL=styles.provider.js.map