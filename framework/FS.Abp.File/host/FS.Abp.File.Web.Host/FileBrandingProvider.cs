using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.File
{
    [Dependency(ReplaceServices = true)]
    public class FileBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "File";
    }
}
