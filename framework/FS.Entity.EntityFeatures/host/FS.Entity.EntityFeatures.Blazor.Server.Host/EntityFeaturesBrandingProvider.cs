using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Entity.EntityFeatures.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class EntityFeaturesBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EntityFeatures";
}
