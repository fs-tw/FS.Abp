import { APP_INITIALIZER, Injector } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LayoutStateService } from '../services/layout-state.service';
export const LAYOUT_INIT_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: init,
        deps: [Injector],
        multi: true,
    },
];
export function init(injector) {
    return () => {
        listenRouter(injector);
    };
}
export function listenRouter(injector) {
    const router = injector.get(Router);
    const layoutStateService = injector.get(LayoutStateService);
    router.events
        .pipe(filter((event) => event instanceof ResolveEnd))
        .subscribe((event) => {
        //const currentUrl = decodeURI(event.state.url.split('?')[0]);
        //layoutStateService.setStore({ currentUrl });
        layoutStateService.fetchPageNavs(event.state);
    });
}
//# sourceMappingURL=init.provider.js.map