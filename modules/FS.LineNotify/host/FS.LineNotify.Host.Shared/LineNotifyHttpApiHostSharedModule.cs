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
                    "xxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    "Further Line Service", "Further Line Service",
                    "https://localhost:44331/webhook/line-notify/call-back");
                options.ServiceDefinitions.Add("fs", service);
            });

        }
    }
}
