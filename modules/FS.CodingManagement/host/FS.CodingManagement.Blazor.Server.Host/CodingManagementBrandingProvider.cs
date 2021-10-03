using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.CodingManagement.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class CodingManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CodingManagement";
    }
}
