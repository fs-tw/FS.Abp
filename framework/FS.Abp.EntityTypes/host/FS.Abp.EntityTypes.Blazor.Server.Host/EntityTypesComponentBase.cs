using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.EntityTypes.Blazor.Server.Host
{
    public abstract class EntityTypesComponentBase : AbpComponentBase
    {
        protected EntityTypesComponentBase()
        {
            LocalizationResource = typeof(EntityTypesResource);
        }
    }
}
