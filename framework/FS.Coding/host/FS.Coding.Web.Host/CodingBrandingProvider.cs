using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Coding;

[Dependency(ReplaceServices = true)]
public class CodingBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Coding";
}
