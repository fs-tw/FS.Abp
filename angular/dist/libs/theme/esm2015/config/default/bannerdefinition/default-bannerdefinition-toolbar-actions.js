import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
const ɵ0 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
export const DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);
export { ɵ0 };
//# sourceMappingURL=default-bannerdefinition-toolbar-actions.js.map