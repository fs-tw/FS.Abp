using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Services;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageAppServiceBase : ApplicationService
    {
        protected LanguageAppServiceBase()
        {
            ObjectMapperContext = typeof(LanguageManagementApplicationModule);
            LocalizationResource = typeof(AbpLocalizationOptions);
        }
    }
}
