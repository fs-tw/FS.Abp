using FS.Abp.File.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.File
{
    public abstract class FileController : AbpController
    {
        protected FileController()
        {
            LocalizationResource = typeof(FileResource);
        }
    }
}
