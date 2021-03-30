﻿using Data;
using FS.Abp.File.Directories;
using FS.Abp.Files;
using FS.Abp.VirtualFileSystem;
using FS.Theme.Banners;
using FS.Theme.Routes;
//using FS.Theme.WebSites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Services;

namespace DEMO.Theme
{
    public class ThemeSeeder : DomainService
    {
        private const string SourceData = "/Files/Data/Themes.json";
        private readonly IVirtualFileJsonReader _virtualFileJsonReader;
        //private readonly IWebSitesStore _webSitesStore;
        private readonly IBannersStore bannersStore;
        private readonly IRoutesStore routesStore;

        public IDirectoriesManager directoriesManager { get; set; }
        public IFileGeneraterManager fileGeneraterManager { get; set; }

        public ThemeSeeder(
            IVirtualFileJsonReader virtualFileJsonReader,
            //IWebSitesStore webSitesStore,
            IBannersStore bannersStore,
            IRoutesStore routesStore
            )
        {
            this._virtualFileJsonReader = virtualFileJsonReader;
            //this._webSitesStore = webSitesStore;
            this.bannersStore = bannersStore;
            this.routesStore = routesStore;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            //List<ThemeInfo> jsonData = this._virtualFileJsonReader.ReadJson<List<ThemeInfo>>(SourceData);
            //var count = await this._webSitesStore.WebSiteDefinition.GetCountAsync();

            //if (count > 0) return;

            //var webSiteDefinitionDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.WebSiteInfos")).Last();

            //foreach (var data in jsonData)
            //{
            //    WebSiteDefinition webSiteDefinition = new WebSiteDefinition()
            //    {
            //        No = data.No,
            //        DisplayName = data.No,
            //        Description = "",
            //        Title = data.WebSiteInfo.Title,
            //        Count = data.WebSiteInfo.Count,
            //        Copyright = data.WebSiteInfo.Copyright,
            //        TenantId = context.TenantId
            //    };

            //    var logoFile = await this.fileGeneraterManager.CreateFile(data.WebSiteInfo.LogoSource, webSiteDefinitionDirectory.Id, data.No + "_Logo", context.TenantId);
            //    var faviconFile = await this.fileGeneraterManager.CreateFile(data.WebSiteInfo.FaviconSource, webSiteDefinitionDirectory.Id, data.No + "_favicon", context.TenantId);
            //    webSiteDefinition.LogoFileId = logoFile.Id;
            //    webSiteDefinition.FaviconFileId = faviconFile.Id;
            //    EntityHelper.TrySetId(webSiteDefinition, () => this.GuidGenerator.Create());
            //    await this._webSitesStore.WebSiteDefinition.InsertAsync(webSiteDefinition, true);
            //    await this.createBanner(data.No, data.Banners, context.TenantId);
            //    await this.createRoute(data.No, data.Routers, context.TenantId);
            //}
        }

        private async Task createBanner(string no, List<BannerInfo> banners, Guid? tenantId)
        {
            var bannerDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.Banners")).Last();
            var bannerDefinition = new BannerDefinition() { No = no, DisplayName = no };
            await this.bannersStore.BannerDefinition.InsertAsync(bannerDefinition, true);

            foreach (var banner in banners)
            {
                var fileName = banner.No + "_" + Guid.NewGuid().ToString();
                var entity = new Banner()
                {
                    No = banner.No,
                    DisplayName = banner.DisplayName,
                    Description = banner.Description,
                    Disable = banner.Disable,
                    Sequence = banner.Sequence,
                    BannerDefinitionId = bannerDefinition.Id,
                    FileName = fileName
                };
                var logoFile = await this.fileGeneraterManager.CreateFile(banner.ImageFileSource, bannerDirectory.Id, fileName, tenantId);
                entity.ImageFileId = logoFile.Id;
                EntityHelper.TrySetId(entity, () => this.GuidGenerator.Create());
                await this.bannersStore.Banner.InsertAsync(entity, true);
            }
        }

        private async Task createRoute(string no, List<RouterInfo> routers, Guid? tenantId)
        {
            var routerDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Theme.Routers")).Last();
            var routerDefinition = new RouteDefinition() { No = no, DisplayName = no };
            await this.routesStore.RouteDefinition.InsertAsync(routerDefinition, true);

            foreach (var route in routers)
            {
                await this.insertRoute(route, routerDirectory.Id, routerDefinition.Id, null, tenantId);
            }
        }

        private async Task insertRoute(RouterInfo input, Guid routerDirectoryId, Guid definitionId, Guid? parentId, Guid? tenantId)
        {
            Route entity = new Route()
            {
                No = input.No,
                DisplayName = input.DisplayName,
                Description = input.Description,
                Disable = input.Disable,
                Url = input.Url,
                OpenAnotherWindow = input.OpenAnotherWindow,
                Sequence = input.Sequence,
                RouteDefinitionId = definitionId,
                TenantId = tenantId,
                ParentId = parentId
            };
            if (input.IconSource.IsNullOrEmpty()) entity.IconFileId = null;
            else
            {
                var iconFileId = await this.fileGeneraterManager.CreateFile(input.IconSource, routerDirectoryId, input.No + "_" + Guid.NewGuid().ToString(), tenantId);
                entity.IconFileId = iconFileId.Id;
            }
            EntityHelper.TrySetId(entity, () => this.GuidGenerator.Create());
            await this.routesStore.Route.InsertAsync(entity, true);

            foreach (var child in input.Routes)
            {
                await this.insertRoute(child, routerDirectoryId, definitionId, entity.Id, tenantId);
            }
        }
    }
}