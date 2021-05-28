import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { BlogsComponent } from '../../components/blogs/blogs.component';

export const DEFAULT_BLOGS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    text: 'CmsKit::Edit',
    action: data => {
      const component = data.getInjected(BlogsComponent);
      component.onEdit(data.record.id);
    },
    permission: 'CmsKit.Blogs.Update',
    //icon: 'fa fa-plus',
  },
  {
    text: 'CmsKit::Delete',
    action: data => {
      const component = data.getInjected(BlogsComponent);
      component.delete(data.record.id);
    },
    permission: 'CmsKit.Blogs.Delete',
    //visible: data => !data.record.isStatic,
  },
]);
