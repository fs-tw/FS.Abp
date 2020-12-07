using System;
using Volo.Abp.ObjectExtending.Modularity;

namespace Volo.Abp.ObjectExtending
{
    public class SaasModuleExtensionConfiguration : ModuleExtensionConfiguration
    {
        public SaasModuleExtensionConfiguration ConfigureTenant(
            Action<EntityExtensionConfiguration> configureAction)
        {
            return this.ConfigureEntity(
                SaasModuleExtensionConsts.EntityNames.Tenant,
                configureAction
            );
        }

        public SaasModuleExtensionConfiguration ConfigureEdition(
            Action<EntityExtensionConfiguration> configureAction)
        {
            return this.ConfigureEntity(
                SaasModuleExtensionConsts.EntityNames.Edition,
                configureAction
            );
        }
    }
}
