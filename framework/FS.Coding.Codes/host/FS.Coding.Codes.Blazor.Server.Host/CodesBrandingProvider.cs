using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Coding.Codes.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class CodesBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Codes";
}
