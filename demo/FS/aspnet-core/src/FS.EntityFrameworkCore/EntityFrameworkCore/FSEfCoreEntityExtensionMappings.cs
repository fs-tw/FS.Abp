using FS.CmsKitManagement.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace FS.EntityFrameworkCore
{
    public static class FSEfCoreEntityExtensionMappings
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            FSGlobalFeatureConfigurator.Configure();
            FSModuleExtensionConfigurator.Configure();
            
            OneTimeRunner.Run(() =>
            {
                CmsKitManagementEfCoreEntityExtensionMappings.Configure();
            });
        }
    }
}
