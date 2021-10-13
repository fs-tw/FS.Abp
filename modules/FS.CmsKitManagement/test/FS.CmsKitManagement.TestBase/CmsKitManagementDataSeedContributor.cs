using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;

namespace FS.CmsKitManagement
{
    public class CmsKitManagementDataSeedContributor : Volo.Abp.Domain.Services.DomainService, IDataSeedContributor, ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private readonly ICurrentTenant _currentTenant;

        public CmsKitManagementDataSeedContributor(
            IGuidGenerator guidGenerator, ICurrentTenant currentTenant)
        {
            _guidGenerator = guidGenerator;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            /* Instead of returning the Task.CompletedTask, you can insert your test data
             * at this point!
             */
            //var pageManager = this.LazyServiceProvider.LazyGetRequiredService<Volo.CmsKit.Pages.PageManager>();
            //var pageRepository = this.LazyServiceProvider.LazyGetRequiredService<Volo.CmsKit.Pages.IPageRepository>();

            //var multiLingualRepository = this.LazyServiceProvider.LazyGetRequiredService<FS.CmsKitManagement.MultiLinguals.IMultiLingualRepository>();

            //var options = this.LazyServiceProvider.LazyGetRequiredService<IOptions<FS.Abp.EntityTypes.EntityTypeOption>>();



            //var page = await pageManager.CreateAsync("豐碩資訊", "further", "豐碩資訊");
            //await pageRepository.InsertAsync(page, true);

            //var multiLingual = new MultiLinguals.MultiLingual(GuidGenerator.Create())
            //{
            //    EntityType = options.Value.GetOrNull<MultiLinguals.MultiLingual>().Get<Volo.CmsKit.Pages.Page>().EntityType,
            //    EntityId = page.Id.ToString(),
            //    DefaultCulture="en",
            //    MultiLingualTranslations = new List<MultiLinguals.MultiLingualTranslation>
            //    {
            //        new MultiLinguals.MultiLingualTranslation(GuidGenerator.Create()){
            //            Culture="zh-tw",
            //            Properties=new List<MultiLinguals.MultiLingualProperty>()
            //            {
            //                new MultiLinguals.MultiLingualProperty(){Name="Title",Value="豐碩資訊" },
            //                new MultiLinguals.MultiLingualProperty(){Name="Content",Value="豐碩資訊" }
            //            }
            //        },
            //        new MultiLinguals.MultiLingualTranslation(GuidGenerator.Create()){
            //            Culture="en",
            //            Properties=new List<MultiLinguals.MultiLingualProperty>()
            //            {
            //                new MultiLinguals.MultiLingualProperty(){Name="Title",Value="further" },
            //                new MultiLinguals.MultiLingualProperty(){Name="Content",Value="further" }
            //            }
            //        }
            //    }
            //};
            //await multiLingualRepository.InsertAsync(multiLingual);
            CreateSampleAsync();
            using (_currentTenant.Change(context?.TenantId))
            {

            }

            async Task CreateSampleAsync()
            {
                var pageManager = this.LazyServiceProvider.LazyGetRequiredService<Volo.CmsKit.Pages.PageManager>();
                var multiLingualsStore = this.LazyServiceProvider.LazyGetRequiredService<FS.CmsKitManagement.MultiLinguals.IMultiLingualsStore>();
                var page = await pageManager.CreateAsync("豐碩資訊", "further", "豐碩資訊");

                var multiLingual = await multiLingualsStore.CreateMultiLingualAsync(page);

                FS.CmsKit.Pages.PageTranslation enPageTranslation = new CmsKit.Pages.PageTranslation()
                {
                    Content="further content",
                    Title="further title"
                };

                await multiLingual.AddOrReplaceTranslationAsync(multiLingualsStore, "en", enPageTranslation);
            }
        }
    }
}
