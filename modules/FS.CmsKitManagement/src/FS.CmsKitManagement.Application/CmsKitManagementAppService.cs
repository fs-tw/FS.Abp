using FS.CmsKitManagement.Blogs;
using FS.CmsKitManagement.Localization;
//using FS.CmsKitManagement.Routes;
using Volo.Abp.Application.Services;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementAppService : ApplicationService
    {
        //protected IRoutesStore RoutesStore => this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();
        protected IBlogsStore BlogsStore => this.LazyServiceProvider.LazyGetRequiredService<IBlogsStore>();
        protected BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();
        protected FS.CmsKitManagement.MediaDescriptors.IMediaDescriptorsStore MediaDescriptorsStore => this.LazyServiceProvider.LazyGetRequiredService<FS.CmsKitManagement.MediaDescriptors.IMediaDescriptorsStore>();

        protected CmsKitManagementAppService()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
            ObjectMapperContext = typeof(CmsKitManagementApplicationModule);
        }
    }
}
