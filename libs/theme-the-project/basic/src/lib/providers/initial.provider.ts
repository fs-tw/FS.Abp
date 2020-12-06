import { APP_INITIALIZER } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
//import { GetTheme, RouterState, UpdateProfile, eThemeNos } from '@fs/theme.core';


export const INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Store, Actions],
    multi: true,
  },
];

export function configureInitial(store: Store, actions$: Actions) {
  return () => {
    initial(store, actions$);
  };
}

function initial(store: Store, actions$: Actions) {
  // actions$
  //   .pipe(ofActionDispatched(UpdateProfile))
  //   .subscribe(r => {     
  //     store.dispatch([
  //       new GetTheme(eThemeNos.TheProject),
  //     ]);
  //   });
}
