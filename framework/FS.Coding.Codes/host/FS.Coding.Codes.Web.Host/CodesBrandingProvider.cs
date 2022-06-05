using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Coding.Codes;

[Dependency(ReplaceServices = true)]
public class CodesBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Codes";
}
