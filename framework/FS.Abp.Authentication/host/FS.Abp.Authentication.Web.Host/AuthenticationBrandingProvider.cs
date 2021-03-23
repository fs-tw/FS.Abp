using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Authentication
{
    [Dependency(ReplaceServices = true)]
    public class AuthenticationBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Authentication";
    }
}
