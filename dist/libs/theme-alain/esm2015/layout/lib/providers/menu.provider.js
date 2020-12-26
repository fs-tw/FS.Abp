import { Injector } from '@angular/core';
import { RoutesService, LocalizationPipe, PermissionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { MenuService, SettingsService } from '@delon/theme';
export const LAYOUT_MENU_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureMenus,
        deps: [Injector],
        multi: true,
    },
];
export function configureMenus(injector) {
    return () => {
        const menuService = injector.get(MenuService);
        const routes = injector.get(RoutesService);
        const localizationPipe = injector.get(LocalizationPipe);
        const permissionService = injector.get(PermissionService);
        const settingsService = injector.get(SettingsService);
        routes.visible$.subscribe(x => {
            menuService.clear();
            let condition = x => x.name == 'AbpUiNavigation::Menu:Administration' && isGrantedPolicy(x.requiredPolicy);
            let menus = x.filter(condition).map(r => {
                return mapToMenu(r);
            });
            menuService.add(menus);
        });
        settingsService.notify.subscribe(x => {
            setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0);
        });
        function mapToMenu(item) {
            const menu = {
                text: localizationPipe.transform(item.name),
                link: item.path,
                icon: item.iconClass,
                children: []
            };
            if (item.children.filter(x => isGrantedPolicy(x.requiredPolicy)).length > 0) {
                menu.children = item.children.map(x => mapToMenu(x));
            }
            return menu;
        }
        function isGrantedPolicy(requiredPolicy) {
            if (!!requiredPolicy) {
                return permissionService.getGrantedPolicy(requiredPolicy);
            }
            return true;
        }
    };
}
//# sourceMappingURL=menu.provider.js.map