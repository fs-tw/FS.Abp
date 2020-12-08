using Volo.Abp.Bundling;

namespace Volo.FileManagement.Blazor
{
    public class FileManagementBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {
            context.Add("_content/Volo.FileManagement.Blazor/filemanagement/js/filemanagement.js");
        }

        public void AddStyles(BundleContext context)
        {
            context.Add("_content/Volo.FileManagement.Blazor/filemanagement/css/filemanagement.css");
        }
    }
}
