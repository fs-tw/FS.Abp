using Volo.Abp.Autofac;
using Volo.Abp.Cli;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.Cli
{
    [DependsOn(
        typeof(AbpCliCoreModule),
        typeof(AbpAutofacModule),
        typeof(AbpVirtualFileSystemModule)
    )]
    public class AbpCliModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<VirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpCliModule>("FS.Abp.Cli");
            });

        }

    }
}