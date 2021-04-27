import {
  ConfigStateService,
  CONTENT_STRATEGY,
  CORE_OPTIONS,
  DomInsertionService,
  ReplaceableComponentsService,
} from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { MSLayoutComponent } from '@fs-tw/theme-alain-ms/layout';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import styles from '../constants/styles';
import { eThemeNgAlainMsComponents } from '../enums/components';

export const NG_ALAIN_MS_THEME_STYLES_PROVIDERS = [
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
    const domInsertion = injector.get(DomInsertionService);

    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.ApplicationLayout,
    component: ApplicationLayoutComponent
  });
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.AccountLayout,
    component: AccountLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.EmptyLayout,
    component: MSLayoutComponent,
  });
}
