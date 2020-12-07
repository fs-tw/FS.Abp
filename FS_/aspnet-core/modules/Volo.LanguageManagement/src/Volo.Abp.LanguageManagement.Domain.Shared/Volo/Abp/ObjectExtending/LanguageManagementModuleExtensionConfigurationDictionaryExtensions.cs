using System;
using Volo.Abp.ObjectExtending.Modularity;

namespace Volo.Abp.ObjectExtending
{
    public static class LanguageManagementModuleExtensionConfigurationDictionaryExtensions
    {
        public static ModuleExtensionConfigurationDictionary ConfigureLanguageManagement(
            this ModuleExtensionConfigurationDictionary modules,
            Action<LanguageManagementModuleExtensionConfiguration> configureAction)
        {
            return modules.ConfigureModule(
                LanguageManagementModuleExtensionConsts.ModuleName,
                configureAction
            );
        }
    }
}
