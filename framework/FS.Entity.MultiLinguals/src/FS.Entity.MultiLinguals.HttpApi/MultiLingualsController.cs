using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Entity.MultiLinguals;

public abstract class MultiLingualsController : AbpControllerBase
{
    protected MultiLingualsController()
    {
        LocalizationResource = typeof(MultiLingualsResource);
    }
}
