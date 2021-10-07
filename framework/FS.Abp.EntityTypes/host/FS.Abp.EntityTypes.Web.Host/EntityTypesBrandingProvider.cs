using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.EntityTypes
{
    [Dependency(ReplaceServices = true)]
    public class EntityTypesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "EntityTypes";
    }
}
