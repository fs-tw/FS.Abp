import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
const ɵ0 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.Blogs" /* Blog */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
export const DEFAULT_BLOG_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);
export { ɵ0 };
//# sourceMappingURL=default-blog-toolbar-actions.js.map