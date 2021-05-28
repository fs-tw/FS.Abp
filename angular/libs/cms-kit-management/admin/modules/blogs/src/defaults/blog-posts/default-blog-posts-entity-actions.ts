import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { BlogPostsComponent } from '../../components/blog-posts/blog-posts.component';

export const DEFAULT_BLOG_POSTS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    text: 'CmsKit::Edit',
    action: data => {
      const component= data.getInjected(BlogPostsComponent);
      component.onEdit(data.record.id);
    },
    permission: 'CmsKit.BlogPosts.Update',
    //icon: 'fa fa-plus',
  },
  {
    text: 'CmsKit::Delete',
    action: data => {
      const component = data.getInjected(BlogPostsComponent);
      component.delete(data.record.id,data.record.name);
    },
    permission: 'CmsKit.BlogPosts.Delete',
    //visible: data => !data.record.isStatic,
  },
]);
