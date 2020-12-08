using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.SignalR;
using Volo.Abp.Features;
using Volo.Abp.Modularity;

namespace Volo.Chat.Web.Bundling
{
    [DependsOn(
        typeof(SignalRBrowserScriptContributor)
    )]
    public class ChatGlobalScriptContributor : BundleContributor
    {
        public async override Task ConfigureBundleAsync(BundleConfigurationContext context)
        {
            var featureChecker = context.ServiceProvider.GetService<IFeatureChecker>();

            if (await featureChecker.IsEnabledAsync(ChatFeatures.Enable))
            {
                context.Files.AddIfNotContains("/Pages/Chat/chatMessageReceiving.js");
            }
        }
    }
}
