using FS.CmsKitManagement.Blogs;
using FS.CmsKitManagement.Localization;
using FS.CmsKitManagement.Routes;
using Volo.Abp.Application.Services;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementAppService : ApplicationService
    {
        protected MediatR.IMediator Mediator => this.LazyServiceProvider.LazyGetRequiredService<MediatR.IMediator>();
        protected IRoutesStore RoutesStore => this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();
        protected IBlogsStore BlogsStore => this.LazyServiceProvider.LazyGetRequiredService<IBlogsStore>();
        protected BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();
        protected IMediaDescriptorsStore MediaDescriptorsStore => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorsStore>();

        protected CmsKitManagementAppService()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
            ObjectMapperContext = typeof(CmsKitManagementApplicationModule);
        }
    }
}
