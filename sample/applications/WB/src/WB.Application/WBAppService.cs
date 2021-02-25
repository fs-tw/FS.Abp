using System;
using System.Collections.Generic;
using System.Text;
using WB.Localization;
using Volo.Abp.Application.Services;

namespace WB
{
    /* Inherit your application services from this class.
     */
    public abstract class WBAppService : ApplicationService
    {
        protected WBAppService()
        {
            LocalizationResource = typeof(WBResource);
        }
    }
}
