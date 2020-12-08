using System;
using Volo.Abp.ObjectExtending.Modularity;

namespace Volo.Abp.ObjectExtending
{
    public class LanguageManagementModuleExtensionConfiguration : ModuleExtensionConfiguration
    {
        public LanguageManagementModuleExtensionConfiguration ConfigureLanguage(
            Action<EntityExtensionConfiguration> configureAction)
        {
            return this.ConfigureEntity(
                LanguageManagementModuleExtensionConsts.EntityNames.Language,
                configureAction
            );
        }
    }
}