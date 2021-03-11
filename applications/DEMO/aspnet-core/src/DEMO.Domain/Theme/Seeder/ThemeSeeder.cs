
using Data;
using FS.Abp.File.Directories;
using FS.Abp.VirtualFileSystem;
using FS.Theme.Banners;
using FS.Theme.Routes;
using FS.Theme.WebSites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Services;

namespace DEMO.Theme
{
    public class ThemeSeeder : DomainService
    {
        private const string SourceData = "/Files/Data/Themes.json";
        private readonly IVirtualFileJsonReader _virtualFileJsonReader;
        private readonly IWebSitesStore _webSitesStore;
        private readonly IBannersStore bannersStore;
        private readonly IRoutesStore routesStore;

        public IDirectoriesManager directoriesManager { get; set; }  
        public FileGeneraterManager fileGeneraterManager { get; set; }
        public ThemeSeeder(
            IVirtualFileJsonReader virtualFileJsonReader,
            IWebSitesStore webSitesStore,
            IBannersStore bannersStore,
            IRoutesStore routesStore
            )
        {
            this._virtualFileJsonReader = virtualFileJsonReader;
            this._webSitesStore = webSitesStore;
            this.bannersStore = bannersStore;
            this.routesStore = routesStore;
        }

        public async Task SeedAsync(DataSeedContext context) 
        {
            List<ThemeInfo> jsonData = this._virtualFileJsonReader.ReadJson<List<ThemeInfo>>(SourceData);
            var count = await this._webSitesStore.WebSiteDefinition.GetCountAsync();
            
            if (count > 0) return;

            var webSiteDefinitionDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.WebSiteDefinition")).Last();
            

            foreach (var data in jsonData) 
            {
                WebSiteDefinition webSiteDefinition = new WebSiteDefinition()
                {
                    No = data.No,
                    DisplayName = data.No,
                    Description = "",                    
                    Title = data.WebSiteInfo.Title,                    
                    Count = data.WebSiteInfo.Count,
                    Copyright = data.WebSiteInfo.Copyright,
                    TenantId = context.TenantId
                };

                var logoFile = await this.fileGeneraterManager.CreateFileFromBase64(data.WebSiteInfo.LogoSource, webSiteDefinitionDirectory.Id, data.No+ "_Logo", context.TenantId);
                var faviconFile = await this.fileGeneraterManager.CreateFileFromBase64(data.WebSiteInfo.FaviconSource, webSiteDefinitionDirectory.Id, data.No + "_favicon", context.TenantId);
                webSiteDefinition.LogoFileId = logoFile.Id;
                webSiteDefinition.FaviconFileId = faviconFile.Id;
                EntityHelper.TrySetId(webSiteDefinition, () => this.GuidGenerator.Create());
                await this._webSitesStore.WebSiteDefinition.InsertAsync(webSiteDefinition, true);
                await this.createBanner(data.No, data.Banners, context.TenantId);
                //await this.createRoute(data.No, data.Routers, context.TenantId);
            }          
        }


        private async Task createBanner(string no, List<BannerInfo> banners,Guid? tenantId)
        {
            var bannerDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.Banners")).Last();
            var bannerDefinition = new BannerDefinition() { No = no, DisplayName = no };
            await this.bannersStore.BannerDefinition.InsertAsync(bannerDefinition, true);

            foreach (var banner in banners) 
            {
                var entity = new Banner()
                {
                    No = banner.No,
                    DisplayName = banner.DisplayName,
                    Description = banner.Description,
                    Disable = banner.Disable,
                    Sequence = banner.Sequence,
                    BannerDefinitionId = bannerDefinition.Id
                };
                var logoFile = await this.fileGeneraterManager.CreateFileFromBase64(banner.ImageFileSource, bannerDirectory.Id, banner.No +"_"+Guid.NewGuid().ToString(), tenantId);
                entity.ImageFileId = logoFile.Id;
                EntityHelper.TrySetId(entity, () => this.GuidGenerator.Create());
                await this.bannersStore.Banner.InsertAsync(entity, true);
            }
        }


        private async Task createRoute(string no, List<RouterInfo> routers, Guid? tenantId) 
        {
            var routerDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.Routers")).Last();
            var routerDefinition = new RouteDefinition() { No = no, Description = no };
            await this.routesStore.RouteDefinition.InsertAsync(routerDefinition, true);
        }


    }
}
