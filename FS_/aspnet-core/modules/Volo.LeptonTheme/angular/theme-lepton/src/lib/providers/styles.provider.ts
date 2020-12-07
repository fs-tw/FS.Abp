import {
  ConfigStateService,
  CONTENT_STRATEGY,
  CORE_OPTIONS,
  DomInsertionService,
  ReplaceableComponentsService,
} from '@abp/ng.core';
import { APP_INITIALIZER, Injector, RendererFactory2 } from '@angular/core';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';
import styles from '../constants/styles';
import { eThemeLeptonComponents } from '../enums/components';
import { Layout } from '../models/layout';
import { LayoutStateService } from '../services';

export const LEPTON_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Injector],
    multi: true,
  },
];

export function configureStyles(injector: Injector) {
  return () => {
    const rendererFactory = injector.get(RendererFactory2);
    const domInsertion = injector.get(DomInsertionService);
    const replaceableComponents = injector.get(ReplaceableComponentsService);
    const configState = injector.get(ConfigStateService);
    const coreOptions = injector.get(CORE_OPTIONS);
    const layoutStateService = injector.get(LayoutStateService);

    rendererFactory
      .createRenderer(document.body, null)
      .addClass(document.body, 'abp-application-layout');
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));

    listenToLeptonSettings(layoutStateService, configState);

    const setStyle = createSetStyle(layoutStateService, configState);
    if (coreOptions.skipGetAppConfiguration) setStyle();

    configState
      .createOnUpdateStream(state => state)
      .subscribe(() => {
        setStyle();
      });

    initLayouts(replaceableComponents);
  };
}

function listenToLeptonSettings(layoutStateService: LayoutStateService, configState: ConfigStateService) {
  const leptonSettings$ = configState.getSettings$('Lepton');
  const layoutConfigKey = 'Volo.Abp.LeptonTheme.Layout';
  leptonSettings$.subscribe(settings => {
    layoutStateService.setLayoutBoxed(settings[`${layoutConfigKey}.Boxed`] === 'True');
    layoutStateService.setMenuStatus(
      Layout.MenuStatus[settings[`${layoutConfigKey}.MenuStatus`] as string] || 0,
    );
    layoutStateService.setMenuPlacement(
      Layout.MenuPlacement[settings[`${layoutConfigKey}.MenuPlacement`] as string] || 0,
    );
  });
}

function createSetStyle(layoutStateService: LayoutStateService, configState: ConfigStateService) {
  return () =>
    layoutStateService.setStyle(
      Number(
        (configState.getSetting('Volo.Abp.LeptonTheme.Style') || 'Style1').replace('Style', ''),
      ),
    );
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeLeptonComponents.ApplicationLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeLeptonComponents.AccountLayout,
    component: AccountLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeLeptonComponents.EmptyLayout,
    component: EmptyLayoutComponent,
  });
}
