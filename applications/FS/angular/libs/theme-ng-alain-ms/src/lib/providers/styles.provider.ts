import {
  ReplaceableComponentsService,
  DomInsertionService,
  CONTENT_STRATEGY,
} from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import {
  AccountLayoutComponent,
  PageBarComponent,
} from '@fs/theme.ng-alain-ms/layout';
import { ApplicationLayoutComponent } from '@fs/theme.ng-alain-ms/layout';
import { EmptyLayoutComponent } from '@fs/theme.ng-alain-ms/layout';
import styles from '../constants/styles';
import { eThemeNgAlainMsComponents } from '../enums/components';

export const BASIC_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [ReplaceableComponentsService, DomInsertionService],
    multi: true,
  },
];

export function configureStyles(
  replaceableComponents: ReplaceableComponentsService,
  domInsertion: DomInsertionService
) {
  return () => {
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.ApplicationLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.AccountLayout,
    component: AccountLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeNgAlainMsComponents.EmptyLayout,
    component: EmptyLayoutComponent,
  });
  // new AddReplaceableComponent({
  //   key: eThemeCoreComponents.PageBar,
  //   component: PageBarComponent,
  // }),
}
