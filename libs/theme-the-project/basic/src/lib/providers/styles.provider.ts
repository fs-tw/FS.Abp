import { ReplaceableComponentsService,DomInsertionService,CONTENT_STRATEGY } from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import styles from '../constants/styles';
import { Store } from '@ngxs/store';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';

export const BASIC_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Injector],
    multi: true,
  },
];

export function configureStyles(injector: Injector) {
  return () => {
    const replaceableComponentsService=injector.get(ReplaceableComponentsService);
    const domInsertion=injector.get(DomInsertionService);
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
   
    initLayouts(replaceableComponentsService);
   
  };
}

function initLayouts(replaceableComponentsService: ReplaceableComponentsService) {
  replaceableComponentsService.add({
    key:eThemeBasicComponents.ApplicationLayout,
    component: ApplicationLayoutComponent
  })
  replaceableComponentsService.add({
    key:eThemeBasicComponents.AccountLayout,
    component: ApplicationLayoutComponent
  })
  replaceableComponentsService.add({
    key:eThemeBasicComponents.EmptyLayout,
    component: EmptyLayoutComponent
  })
}
