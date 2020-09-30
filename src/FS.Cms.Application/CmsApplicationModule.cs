using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.BlobStoring.FileSystem;
using Volo.Abp.BlobStoring;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainModule),
        typeof(CmsApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(FS.Abp.CodingManagement.CodingManagementApplicationModule)//,
        //typeof(AbpBlobStoringFileSystemModule)
        )]
    public class CmsApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CmsApplicationModule>(false);
            });

            //Configure<AbpBlobStoringOptions>(options =>
            //{
            //    options.Containers.ConfigureDefault(container =>
            //    {
            //        container.UseFileSystem(fileSystem =>
            //        {
            //            fileSystem.BasePath = @"C:\Test";
            //        });
            //    });
            //});

         

        }
    }
}
