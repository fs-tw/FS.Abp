using Volo.Abp.Bundling;

namespace FS.Abp.Settings.Blazor.Host
{
    public class SettingsBlazorHostBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {

        }

        public void AddStyles(BundleContext context)
        {
            context.Add("main.css", true);
        }
    }
}
