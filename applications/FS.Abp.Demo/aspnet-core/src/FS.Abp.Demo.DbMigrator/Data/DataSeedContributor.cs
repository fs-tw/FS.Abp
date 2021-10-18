using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS.Abp.Demo.DbMigrator.Data
{
    class DataSeedContributor : Volo.Abp.Domain.Services.DomainService, IDataSeedContributor
    {
        public async Task SeedAsync(DataSeedContext context)
        {
            var menusSeeder = this.LazyServiceProvider.LazyGetRequiredService<MenusSeeder>();
            var contentsSeeder = this.LazyServiceProvider.LazyGetRequiredService<ContentsSeeder>();
            var multiLinguals = this.LazyServiceProvider.LazyGetRequiredService<MultiLingualsSeeder>();
            var mediaDescriptors = this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorsSeeder>();

            await contentsSeeder.SeedAsync(context, option =>
            {
                option.Ignore = false;
                option.FileName = "Files/Contents.xlsx";
                option.sheetNameList = new List<string> { "BlogPost", "Page" };
            });

            await menusSeeder.SeedAsync(context, option =>
            {
                option.Ignore = false;
                option.FileName = "Files/Menus.xlsx";
                option.MenusSheetName = "Menus";
                option.PageContentSheetName = "PageContent";
            });

            await multiLinguals.SeedAsync(context, option =>
            {
                option.Ignore = false;
                option.FileName = "Files/MultiLinguals.xlsx";
                option.PageMultiLingualsSheetName = "Page";
            });

            await mediaDescriptors.SeedAsync(context, option =>
            {
                option.Ignore = true;
                option.FileName = "Files/MediaDescriptors.xlsx";
                option.SheetName = "Page";
                option.MediaDirectoryPath = "Files/MediaDescriptors";
            });
        }
    }
}
