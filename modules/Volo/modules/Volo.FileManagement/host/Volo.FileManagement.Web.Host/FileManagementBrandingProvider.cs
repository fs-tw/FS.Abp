using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Volo.FileManagement
{
    [Dependency(ReplaceServices = true)]
    public class FileManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "FileManagement";
    }
}
