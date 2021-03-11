
using Data;
using FS.Abp.File.Directories;
using FS.Abp.VirtualFileSystem;
using FS.Theme.WebSites;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Theme
{
    public class ThemeSeeder : ITransientDependency
    {
        private const string SourceData = "/Files/Data/Themes.json";
        private readonly IVirtualFileJsonReader _virtualFileJsonReader;
        private readonly IWebSitesStore _webSitesStore;
        public IDirectoriesManager directoriesManager { get; set; }  
        public FileGeneraterManager fileGeneraterManager { get; set; }
        public ThemeSeeder(
            IVirtualFileJsonReader virtualFileJsonReader,
            IWebSitesStore webSitesStore
            )
        {
            this._virtualFileJsonReader = virtualFileJsonReader;
            this._webSitesStore = webSitesStore;
        }

        public async Task SeedAsync(DataSeedContext context) 
        {
            List<ThemeInfo> jsonData = this._virtualFileJsonReader.ReadJson<List<ThemeInfo>>(SourceData);
            var count = await this._webSitesStore.WebSiteDefinition.GetCountAsync();
            
            if (count > 0) return;

            var webSiteDefinitionDirectory = await this.directoriesManager.FindByProviderAsync("FS.Theme.WebSiteDefinition");
            var bannerDirectory = await this.directoriesManager.FindByProviderAsync("FS.Theme.Banners");
            var routerDirectory = await this.directoriesManager.FindByProviderAsync("FS.Theme.Routers");

            foreach (var data in jsonData) 
            {
                WebSiteDefinition webSiteDefinition = new WebSiteDefinition()
                {
                    No = "",
                    DisplayName = "",
                    Description = ""
                };
            }


        }
    }
}
