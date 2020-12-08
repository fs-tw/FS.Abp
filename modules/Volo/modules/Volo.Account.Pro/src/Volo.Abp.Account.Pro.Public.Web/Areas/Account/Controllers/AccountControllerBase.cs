using Volo.Abp.Account.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Account.Public.Web.Areas.Account.Controllers
{
    public abstract class AccountControllerBase : AbpController
    {
        protected AccountControllerBase()
        {
            ObjectMapperContext = typeof(AbpAccountPublicWebModule);
            LocalizationResource = typeof(AccountResource);
        }
    }
}