import {
  RoutesService,
  LocalizationPipe,
  PermissionService,
} from '@abp/ng.core';
import { APP_INITIALIZER, inject, Injector } from '@angular/core';
import {
  ResolveEnd,
  Router
} from '@angular/router';
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

export function init(injector: Injector) {
  return () => {
    listenRouter(injector);
  };
}

export function listenRouter(injector: Injector) {
  const router = injector.get(Router);
  const layoutStateService = injector.get(LayoutStateService);

  router.events
    .pipe(filter((event): event is ResolveEnd => event instanceof ResolveEnd))
    .subscribe((event) => {
      //const currentUrl = decodeURI(event.state.url.split('?')[0]);
      //layoutStateService.setStore({ currentUrl });
      layoutStateService.fetchPageNavs(event.state);

    });
}
