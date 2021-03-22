import { ReplaceableComponentsService,ConfigStateService } from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { eThemeUnifyComponents } from '../enums/components';
import { LayoutStateService } from '../service/layout-state.service';


export const UNIFY_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Injector],
    multi: true,
  },
];

export function configureStyles(injector: Injector) {
  return () => {
    const replaceableComponents = injector.get(ReplaceableComponentsService);
    const layoutService = injector.get(LayoutStateService);
    const configState = injector.get(ConfigStateService);


    configState
    .createOnUpdateStream(state => state)
    .subscribe(() => {
      //setSkin(layoutService,configState);
    });
    initLayouts(replaceableComponents);

  };
}


function initLayouts(replaceableComponents) {
  replaceableComponents.add({
    key: eThemeUnifyComponents.ApplicationLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeUnifyComponents.AccountLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeUnifyComponents.EmptyLayout,
    component: ApplicationLayoutComponent,
  });
}
