using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Entity.MultiLinguals;

[Dependency(ReplaceServices = true)]
public class MultiLingualsBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "MultiLinguals";
}
