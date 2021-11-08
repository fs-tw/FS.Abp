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

            Volo.CmsKit.Pages.Page page = null;
            FS.CmsKitManagement.MultiLinguals.MultiLingual pageMultiLingual = null;
            FS.CmsKitManagement.Contents.ContentDefinition contentDefinition = null;
            FS.CmsKitManagement.Contents.EntityContentDefinition pageEntityContentDefinition = null;

            List<string> propertiyNames = new List<string>() { "Name", "Tel", "Qestion", "EMail" };

            using (_currentTenant.Change(context?.TenantId))
            {
                await CreateContentAsync();
                await CreatePageAndMultiLingualAsync();

                await contentsStore.ContentDefinition.InsertAsync(contentDefinition);
                await pageRepository.InsertAsync(page);
                await multiLingualsStore.MultiLingual.InsertAsync(pageMultiLingual);
                await contentsStore.EntityContentDefinition.InsertAsync(pageEntityContentDefinition);
            }

            async Task CreateContentAsync()
            {
                contentDefinition = await contentsStore.CreateContentDefinitionAsync<Volo.CmsKit.Pages.Page>("Contact us");



                var contentTypes = (await propertiyNames.SelectAsync(async x =>
                  {
                      return await contentsStore.CreateContentPropertyAsync(contentDefinition, x);
                  })).ToList();

                contentDefinition.PatchContentProperties(contentTypes);

            }

            async Task CreatePageAndMultiLingualAsync()
            {
                page = await pageManager.CreateAsync("豐碩資訊", "further", "豐碩資訊");

                pageMultiLingual = await multiLingualsStore.CreateMultiLingualAsync(page);

                Volo.CmsKit.Pages.PageTranslation enPageTranslation = new Volo.CmsKit.Pages.PageTranslation()
                {
                    Content = "further content",
                    Title = "further title"
                };

                await pageMultiLingual.AddOrReplaceTranslationAsync(multiLingualsStore, "en", page, enPageTranslation);

                pageEntityContentDefinition = await contentsStore.CreateEntityContentDefinitionAsync(page, contentDefinition);


                List<List<string>> lists = new List<List<string>>()
                {
                    new List<string>{ "Name1", "Tel1", "Qestion1", "EMail1" },
                    new List<string>{ "Name2", "Tel2", "Qestion2", "EMail2" },
                    new List<string>{ "Name3", "Tel3", "Qestion3", "EMail3" },
                    new List<string>{ "Name4", "Tel4", "Qestion4", "EMail4" },
                    new List<string>{ "Name5", "Tel5", "Qestion5", "EMail5" }
                };

                pageEntityContentDefinition.EntityContents = (await lists.SelectAsync(async list =>
                  {
                      var item = await contentsStore.CreateEntityContentAsync(page, pageEntityContentDefinition, lists.IndexOf(list));

                      item.Properties = propertiyNames.Zip(list, (x, y) =>
                         {
                             return new Volo.Abp.NameValue(x, y);
                         }).ToList();
                      return item;
                  })).ToList();


            }
        }
    }
}
