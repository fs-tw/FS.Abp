using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.Application.Services;

namespace FS.Entity.MultiLinguals
{
    public abstract class MultiLingualsAppService : ApplicationService
    {
        protected MultiLingualsAppService()
        {
            LocalizationResource = typeof(MultiLingualsResource);
            ObjectMapperContext = typeof(MultiLingualsApplicationModule);
        }
    }
}


