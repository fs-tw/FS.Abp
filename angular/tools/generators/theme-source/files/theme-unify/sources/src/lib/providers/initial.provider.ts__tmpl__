import { ApplicationRef, APP_INITIALIZER, ElementRef, Injector } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutStateService } from '../service/layout-state.service';
import { of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
//import { GetTheme, RouterState, UpdateProfile, eThemeNos } from '@fs/theme.core';


export const UNIFY_THEME_INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Injector],
    multi: true,
  },
];

export function configureInitial(injector: Injector) {
  return () => {
    const router = injector.get(Router);
    const layoutStateService = injector.get(LayoutStateService);
    initial(router,layoutStateService);
  };
}

function initial( router: Router, layoutStateService: LayoutStateService) {
  router.events
    .pipe(
      filter(e => e instanceof NavigationEnd),
      delay(0))
    .subscribe(event => {
      console.log('angular-ready');
      layoutStateService.AppComponent.nativeElement.dispatchEvent(new CustomEvent('angular-ready'));
    });
}
