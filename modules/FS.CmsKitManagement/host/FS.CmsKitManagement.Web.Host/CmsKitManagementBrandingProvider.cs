using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.CmsKitManagement
{
    [Dependency(ReplaceServices = true)]
    public class CmsKitManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CmsKitManagement";
    }
}
