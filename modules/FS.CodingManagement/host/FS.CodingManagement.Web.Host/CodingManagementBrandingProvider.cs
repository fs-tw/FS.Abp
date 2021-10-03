using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.CodingManagement
{
    [Dependency(ReplaceServices = true)]
    public class CodingManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CodingManagement";
    }
}
