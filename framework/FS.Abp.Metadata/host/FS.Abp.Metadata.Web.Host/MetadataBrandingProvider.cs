using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Metadata
{
    [Dependency(ReplaceServices = true)]
    public class MetadataBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Metadata";
    }
}
