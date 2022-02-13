using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Entity.EntityDefaults;

[Dependency(ReplaceServices = true)]
public class EntityDefaultsBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EntityDefaults";
}
