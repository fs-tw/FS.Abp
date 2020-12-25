using System;
using System.Collections.Generic;
using System.Text;
using FS.Abp.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp
{
    /* Inherit your application services from this class.
     */
    public abstract class AbpAppService : ApplicationService
    {
        protected AbpAppService()
        {
            LocalizationResource = typeof(AbpResource);
        }
    }
}
