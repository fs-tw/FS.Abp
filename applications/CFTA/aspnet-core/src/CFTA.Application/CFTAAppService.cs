using System;
using System.Collections.Generic;
using System.Text;
using CFTA.Localization;
using Volo.Abp.Application.Services;

namespace CFTA
{
    /* Inherit your application services from this class.
     */
    public abstract class CFTAAppService : ApplicationService
    {
        protected CFTAAppService()
        {
            LocalizationResource = typeof(CFTAResource);
        }
    }
}
