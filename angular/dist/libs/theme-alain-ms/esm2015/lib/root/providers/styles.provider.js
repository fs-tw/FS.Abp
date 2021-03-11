import { APP_INITIALIZER } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS_AUTO } from './style-icons-auto';
import { ICONS } from './style-icons';
export const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [NzIconService],
        multi: true,
    },
];
export function configureStyles(iconSrv) {
    return () => {
        iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    };
}
//# sourceMappingURL=styles.provider.js.map