using System;
using System.Collections.Generic;
using System.Text;
using FS.YC.Localization;
using Volo.Abp.Application.Services;

namespace FS.YC
{
    /* Inherit your application services from this class.
     */
    public abstract class YCAppService : ApplicationService
    {
        protected YCAppService()
        {
            LocalizationResource = typeof(YCResource);
        }
    }
}
