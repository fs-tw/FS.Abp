using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.Metadata.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class MetadataBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Metadata";
    }
}
