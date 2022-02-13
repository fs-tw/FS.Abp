using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Entity.MultiLinguals.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class MultiLingualsBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "MultiLinguals";
}
