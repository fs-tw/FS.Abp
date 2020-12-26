import { CONTENT_STRATEGY, DomInsertionService, ReplaceableComponentsService, } from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { LayoutBasicComponent, LayoutBlankComponent, LayoutPassportComponent } from '@fs/theme-alain/layout';
import styles from '../constants/styles';
export const NGALAIN_THEME_STYLES_PROVIDERS = [
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
        component: LayoutBasicComponent,
    });
    replaceableComponents.add({
        key: "Theme.AccountLayoutComponent" /* AccountLayout */,
        component: LayoutPassportComponent,
    });
    replaceableComponents.add({
        key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
        component: LayoutBlankComponent,
    });
}
//# sourceMappingURL=styles.provider.js.map