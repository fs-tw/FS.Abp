using Volo.Abp.ObjectExtending;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public static class AbpAuditLoggingEfCoreEntityExtensionMappings
    {
        private static readonly Volo.Abp.Threading.OneTimeRunner OneTimeRunner = new Volo.Abp.Threading.OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                ObjectExtensionManager.Instance
                     .AddOrUpdateProperty<Volo.Abp.AuditLogging.AuditLog, string>(
                         AuditLoggingConst.AbpRouteName,
                         options =>
                         {
                             options.MapEfCore((x, y) => y.HasMaxLength(255));
                             options.CheckPairDefinitionOnMapping = false;
                         }
                     );
            });
        }
    }
}