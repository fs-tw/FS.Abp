using Volo.Abp.Ui.Branding;

namespace FS.Abp.Identity.Blazor.Host;

public class IdentityHostBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Identity";
}
