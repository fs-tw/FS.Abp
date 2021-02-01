import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
export const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
export function configureStyles(store) {
    return () => {
        initLayouts(store);
    };
}
function initLayouts(store) {
}
//# sourceMappingURL=styles.provider.js.map