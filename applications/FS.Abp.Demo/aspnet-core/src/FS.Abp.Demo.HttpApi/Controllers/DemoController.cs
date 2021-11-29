using FS.Abp.Demo.Localization;
using Microsoft.AspNetCore.Components;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Data;

namespace FS.Abp.Demo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DemoController : AbpController
    {
        protected DemoController()
        {
            LocalizationResource = typeof(DemoResource);
        }
    }

    [Microsoft.AspNetCore.Mvc.Route("api/abp-demo")]
    public class AbpDemoController : DemoController
    {
        [Microsoft.AspNetCore.Mvc.HttpPost]
        [Microsoft.AspNetCore.Mvc.Route("test")]
        public virtual async Task Test()
        {
            var management = this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Auditing.IAuditingManager>();

            management.Current.Log.ApplicationName = "yinchang";
            management.Current.Log.ClientName = "test";

            management.Current.Log.SetProperty("test1", "1234");
            management.Current.Log.SetProperty("test2", "5678");
        }
    }
}