import { ReplaceableComponentsService,ConfigStateService } from '@abp/ng.core';
import { Fs } from '@fs-tw/theme-the-project/proxy'
import { APP_INITIALIZER, Injector } from '@angular/core';
//import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { eThemeTheProjectComponents } from '../enums/components';
import { LayoutStateService } from '../service/layout-state.service';
import {DomInsertionService,CONTENT_STRATEGY} from '@abp/ng.core';
import styles from '../constants/styles';


export const THE_PROJECT_THEME_STYLES_PROVIDERS = [
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
    const domInsertion = injector.get(DomInsertionService);

    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));

    configState
    .createOnUpdateStream(state => state)
    .subscribe(() => {
      setSkin(layoutService,configState);
    });
    initLayouts(replaceableComponents);

  };
}
function setSkin(layoutService: LayoutStateService, configState: ConfigStateService) {
  var skinName=(configState.getSetting('FS.Theme.TheProject.Skin') || 'light_blue');
  var skin=Fs.Theme.TheProject.Settings.theProjectSkinOptions.find(x=>x.key==skinName);
  layoutService.setSkin(skin.value);

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
