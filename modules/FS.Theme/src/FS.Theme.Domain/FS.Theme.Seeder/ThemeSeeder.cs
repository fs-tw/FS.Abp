using Data;
using FS.Abp.VirtualFileSystem;
using FS.Theme.WebSites;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Theme.Seeder
{
    public class ThemeSeeder : ITransientDependency
    {
        private const string SourceData = "/Files/Data/資料匯入格式_0225.xlsx";
        private readonly IVirtualFileJsonReader _virtualFileJsonReader;
        private readonly IWebSitesStore _webSitesStore;

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

            foreach (var data in jsonData) 
            {
                //WebSiteDefinition webSiteDefinition = new WebSiteDefinition() 
                //{
                //    No = "",
                //    DisplayName ="",
                //    Description = ""                    
                //}
            }


        }
    }
}
