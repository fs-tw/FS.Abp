using FS.Abp.Npoi.Mapper;
using FS.CmsKitManagement.MultiLinguals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.CmsKit.Pages;

namespace FS.Abp.Demo.DbMigrator.Data
{
    public class MultiLingualsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string PageMultiLingualsSheetName { get; set; }
    }
    public class MultiLingualsInfo
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Culture { get; set; }
    }
    public class MultiLingualsSeeder : FS.Abp.Data.Seeder<MultiLingualsSeederOptions>, ITransientDependency
    {
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        protected IMultiLingualsStore MultiLingualsStore => this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();
        protected IPageRepository PageRepository => this.LazyServiceProvider.LazyGetRequiredService<IPageRepository>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            var existedDatasCount = await MultiLingualsStore.MultiLingual.GetCountAsync();
            if (existedDatasCount > 0)
                return;
            
            var PageTranslationList = VirtualFileNpoiReader.Read<MultiLingualsInfo>(Options.FileName, Options.PageMultiLingualsSheetName);
            List<MultiLingual> multiLingualList = new List<MultiLingual>();
            foreach (var item in PageTranslationList)
            {
                //---為page新增完語言包---
                Page page = await PageRepository.GetBySlugAsync(item.Title);
                MultiLingual multiLingual = await MultiLingualsStore.CreateMultiLingualAsync(page);
                //---end---

                //---新增不同語系的翻譯(之後可拿掉，改用後台輸入)---
                PageTranslation pageTranslation = new PageTranslation
                {
                    Content = item.Content,
                    Title = item.Title
                };

                await multiLingual.AddOrReplaceTranslationAsync(MultiLingualsStore, item.Culture,page, pageTranslation);
                //---end---
                multiLingualList.Add(multiLingual);
            }
            await MultiLingualsStore.MultiLingual.InsertManyAsync(multiLingualList,true);
        }
    }
}
