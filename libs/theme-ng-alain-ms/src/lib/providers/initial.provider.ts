import { APP_INITIALIZER } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { UpdateProfile, UpdateProcessor, Layout, LayoutState, SetShortcuts, SetNavList, SetPageConfig, LayoutService } from '@fs/theme.ng-alain-ms/core'
import { RouterDataResolved } from '@ngxs/router-plugin';
import { RoutesService } from '@abp/ng.core';

export const NGALAINMS_THEME_INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Store, Actions, RoutesService, LayoutService],
    multi: true,
  },
];

export function configureInitial(
  store: Store,
  actions$: Actions,
  routesService: RoutesService,
  msLayoutService: LayoutService
) {
  return () => {
    initial(store, actions$, routesService, msLayoutService);
  };
}

function initial(
  store: Store,
  actions$: Actions,
  routesService: RoutesService,
  msLayoutService: LayoutService
) {
  actions$
    .pipe(ofActionDispatched(UpdateProfile))
    .subscribe(r => {
      let profile = store.selectSnapshot(LayoutState.getProfile);
      store.dispatch([
        new SetShortcuts(msLayoutService.Shortcuts),
        new SetNavList(msLayoutService.NavList),
        new SetPageConfig(profile)//,
        //new GetTheme(eThemeNos.NgAlain)
      ]);
    });
  actions$.pipe(ofActionDispatched(RouterDataResolved)).subscribe((r) => {
    let routes = routesService.visible;
    let processor = new Layout.Processor(routes, r.event.state);
    store.dispatch([
      new UpdateProcessor(processor),
      new UpdateProfile({ ...processor.currentProfileOfRoute, doc: processor.currentRoute?.route?.parentName }),
    ]);
  });
}
