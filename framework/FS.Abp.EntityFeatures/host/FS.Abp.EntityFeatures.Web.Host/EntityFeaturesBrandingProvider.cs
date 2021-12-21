using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.EntityFeatures
{
    [Dependency(ReplaceServices = true)]
    public class EntityFeaturesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "EntityFeatures";
    }
}
