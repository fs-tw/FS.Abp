using System;
using Volo.Abp.ObjectExtending.Modularity;

namespace Volo.Abp.ObjectExtending
{
    public static class SaasModuleExtensionConfigurationDictionaryExtensions
    {
        public static ModuleExtensionConfigurationDictionary ConfigureSaas(
            this ModuleExtensionConfigurationDictionary modules,
            Action<SaasModuleExtensionConfiguration> configureAction)
        {
            return modules.ConfigureModule(
                SaasModuleExtensionConsts.ModuleName,
                configureAction
            );
        }
    }
}