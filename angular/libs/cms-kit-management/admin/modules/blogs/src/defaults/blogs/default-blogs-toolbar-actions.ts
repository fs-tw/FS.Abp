import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { BlogsComponent } from '../../components/blogs/blogs.component';

export const DEFAULT_BLOGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto[]>([
  {
    text: 'CmsKit::NewBlog',
    action: (data) => {
      const component = data.getInjected(BlogsComponent);
      component.onAdd();
    },
    permission: 'CmsKit.Blogs.Create',
    icon: 'fa fa-plus',
  },
]);
