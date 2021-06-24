using FS.CmsKitManagement.Localization;
using MediatR;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementController : AbpController
    {
        protected IMediator Mediator => this.LazyServiceProvider.LazyGetRequiredService<IMediator>();

        protected CmsKitManagementController()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
        }
    }
}
