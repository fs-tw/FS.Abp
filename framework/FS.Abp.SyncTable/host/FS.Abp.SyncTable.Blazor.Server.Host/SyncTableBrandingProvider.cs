using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.SyncTable.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class SyncTableBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SyncTable";
}
