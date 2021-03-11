import { NgModule } from '@angular/core';
import { THEME_ROUTE_PROVIDERS } from './providers/route.provider';
export class ThemeConfigModule {
    static forRoot() {
        return {
            ngModule: ThemeConfigModule,
            providers: [THEME_ROUTE_PROVIDERS],
        };
    }
}
ThemeConfigModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=theme-config.module.js.map