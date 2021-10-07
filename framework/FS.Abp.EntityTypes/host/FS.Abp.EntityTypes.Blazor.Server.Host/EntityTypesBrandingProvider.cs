using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.EntityTypes.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class EntityTypesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "EntityTypes";
    }
}
