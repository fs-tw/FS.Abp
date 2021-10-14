using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
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
            var pageManager = this.LazyServiceProvider.LazyGetRequiredService<Volo.CmsKit.Pages.PageManager>();
            var multiLingualsStore = this.LazyServiceProvider.LazyGetRequiredService<FS.CmsKitManagement.MultiLinguals.IMultiLingualsStore>();
            var contentsStore = this.LazyServiceProvider.LazyGetRequiredService<FS.CmsKitManagement.Contents.IContentsStore>();
            var pageRepository = this.LazyServiceProvider.LazyGetRequiredService<Volo.CmsKit.Pages.IPageRepository>();
            var oldTenantId = context?.TenantId;
            _currentTenant.Change(context?.TenantId);


            Volo.CmsKit.Pages.Page page = null;
            FS.CmsKitManagement.MultiLinguals.MultiLingual multiLingual = null;
            FS.CmsKitManagement.Contents.ContentDefinition contentDefinition = null;

            await CreatePageAndMultiLingualAsync();
            await CreateContentAsync();
            _currentTenant.Change(oldTenantId);

            async Task CreateContentAsync()
            {
                contentDefinition = await contentsStore.CreateContentDefinitionAsync<Volo.CmsKit.Pages.Page>("Contact us");

                List<string> types = new List<string>() { "Name", "Tel", "Qestion", "EMail" };

                var contentTypes = (await types.SelectAsync(async x =>
                  {
                      return await contentsStore.CreateContentTypeAsync(contentDefinition, x);
                  })).ToList();

                contentDefinition.PatchContentTypes(contentTypes);

                await contentsStore.ContentDefinition.InsertAsync(contentDefinition);


            }

            async Task CreatePageAndMultiLingualAsync()
            {
                page = await pageManager.CreateAsync("豐碩資訊", "further", "豐碩資訊");

                multiLingual = await multiLingualsStore.CreateMultiLingualAsync(page);

                FS.CmsKit.Pages.PageTranslation enPageTranslation = new CmsKit.Pages.PageTranslation()
                {
                    Content = "further content",
                    Title = "further title"
                };

                await multiLingual.AddOrReplaceTranslationAsync(multiLingualsStore, page, "en", enPageTranslation);

                await pageRepository.InsertAsync(page, true);

                await multiLingualsStore.MultiLingual.InsertAsync(multiLingual, true);
            }
        }
    }
}
