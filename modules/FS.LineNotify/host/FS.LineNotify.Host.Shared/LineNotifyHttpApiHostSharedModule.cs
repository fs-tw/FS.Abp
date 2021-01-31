

using Volo.Abp.Modularity;

namespace FS.LineNotify
{
    [DependsOn(typeof(FS.LineNotify.LineNotifyDomainSharedModule))]
    public class LineNotifyHttpApiHostSharedModule : AbpModule
    {
       

        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            Configure<FS.LineNotify.ServiceDefinitions.ServiceOptions>(options =>
            {
                var service = new FS.LineNotify.ServiceDefinitions.ServiceDefiniton(
                    "fs",
                    "qSNXDEiDUT3bfQOQBtZloV", "Je4et6KHY9abaFHjmAzVVayo1fHuUTkJKcY04z1aF3A",
                    "Further Line Service", "豐碩資訊-LineNotify串接服務",
                    "https://localhost:44331/api/line-notify/call-back");
                options.ServiceDefinitions.Add("fs", service);
            });

        }
    }
}
