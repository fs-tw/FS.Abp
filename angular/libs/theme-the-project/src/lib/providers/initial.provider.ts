import {
  ApplicationRef,
  APP_INITIALIZER,
  ElementRef,
  Injector,
} from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { LayoutStateService } from '../service/layout-state.service';
//import { GetTheme, RouterState, UpdateProfile, eThemeNos } from '@fs/theme.core';

export const THE_PROJECT_THEME_INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Injector],
    multi: true,
  },
];

export function configureInitial(injector: Injector) {
  return () => {
    initial(injector);
  };
}

function initial(injector: Injector) {
  const router = injector.get(Router);
  const layoutStateService = injector.get(LayoutStateService);

  router.events
    .pipe(filter((event): event is ResolveEnd => event instanceof ResolveEnd))
    .subscribe((event) => {
      setTimeout(() => {
        layoutStateService.ready$.next(true);
      }, 0);
    });
}
