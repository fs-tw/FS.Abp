using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Coding.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class CodingBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Coding";
}
