using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.EntityTypes
{
    public abstract class EntityTypesController : AbpController
    {
        protected EntityTypesController()
        {
            LocalizationResource = typeof(EntityTypesResource);
        }
    }
}
