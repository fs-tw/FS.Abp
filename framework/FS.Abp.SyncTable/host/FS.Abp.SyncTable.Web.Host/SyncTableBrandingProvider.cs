using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.SyncTable;

[Dependency(ReplaceServices = true)]
public class SyncTableBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SyncTable";
}
