using FS.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS
{
    /* Inherit your controllers from this class.
     */
    public abstract class FSController : AbpController
    {
        protected MediatR.IMediator Mediator => this.LazyServiceProvider.LazyGetRequiredService<MediatR.IMediator>();
        protected FSController()
        {
            LocalizationResource = typeof(FSResource);
        }
    }
}