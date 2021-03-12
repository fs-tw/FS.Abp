import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
export const DEFAULT_POST_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: data => {
            const service = data.getInjected(ExtensionsService);
            service.action("Cms::FS.Cms.PostManagement" /* Post */, {
                name: 'Add'
            });
            //const component = data.getInjected(UsersComponent);
            //component.add();
        },
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);
//# sourceMappingURL=default-post-toolbar-actions.js.map