import { CONTENT_STRATEGY, DomInsertionService, ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { LayoutPassportComponent } from '@fs/theme.ng-alain/layout';
import { LayoutDefaultComponent } from '@fs/theme.ng-alain/layout';
import { LayoutFullScreenComponent } from '@fs/theme.ng-alain/layout';
//import { eThemeBasicComponents } from '@abp/ng.theme.basic';
//import { eThemeCoreComponents } from '@fs/theme.core';
import styles from '../constants/styles';
import { eThemeNgAlainComponents } from '../enums/components';

export const BASIC_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [DomInsertionService, ReplaceableComponentsService],
    multi: true,
  },
];

export function configureStyles(
  domInsertion: DomInsertionService,
  replaceableComponents: ReplaceableComponentsService,
) {
  return () => {
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeNgAlainComponents.ApplicationLayout,
    component: LayoutDefaultComponent
  });
  replaceableComponents.add({
    key: eThemeNgAlainComponents.AccountLayout,
    component: LayoutPassportComponent
  });
  replaceableComponents.add({
    key: eThemeNgAlainComponents.EmptyLayout,
    component: LayoutFullScreenComponent
  });
  // replaceableComponents.add({
  //   key: eThemeCoreComponents.PageBar,
  //   component: PageBarComponent
  // });
}
