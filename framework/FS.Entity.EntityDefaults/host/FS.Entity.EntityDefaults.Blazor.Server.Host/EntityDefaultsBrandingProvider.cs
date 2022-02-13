using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Entity.EntityDefaults.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class EntityDefaultsBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EntityDefaults";
}
