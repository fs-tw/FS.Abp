using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.FormManagement
{
    [Dependency(ReplaceServices = true)]
    public class FormManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "FormManagement";
    }
}
