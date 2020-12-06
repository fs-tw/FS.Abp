import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
//import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';
import { eThemeTheProjectComponents } from '../enums/components';

export const THE_PROJECT_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [ReplaceableComponentsService],
    multi: true,
  },
];

export function configureStyles(replaceableComponents: ReplaceableComponentsService) {
  return () => {
    //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));

    initLayouts(replaceableComponents);

  };
}

function initLayouts(replaceableComponents) {
  replaceableComponents.add({
    key: eThemeTheProjectComponents.ApplicationLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeTheProjectComponents.AccountLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeTheProjectComponents.EmptyLayout,
    component: ApplicationLayoutComponent,
  });
}
