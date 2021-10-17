using FS.Abp.Npoi.Mapper;
using FS.Abp.Npoi.Mapper.Attributes;
using FS.CmsKitManagement.Contents;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.Pages;

namespace FS.Abp.Demo.DbMigrator.Data
{
    public class ContentsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public List<string> sheetNameList { get; set; }
    }

    [LevelStartAt(2)]
    public class ContentInfo : FS.Abp.Npoi.Mapper.ITreeNode<ContentInfo>
    {
        public List<ContentInfo> Children { get; set; }
        public string DisplayName { get; set; }
        public string Code { get; set; }
        public string Type { get; set; }
    }
    

    public class ContentsSeeder : FS.Abp.Data.Seeder<ContentsSeederOptions>, ITransientDependency
    {
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        protected IContentsStore ContentsStore => this.LazyServiceProvider.LazyGetRequiredService<IContentsStore>();
        
        protected override async Task SeedAsync(DataSeedContext context)
        {
            var existedDatasCount = await ContentsStore.ContentDefinition.GetCountAsync();
            if (existedDatasCount > 0)
                return;

            List<ContentDefinition> contentDefinitionList = new List<ContentDefinition>();
            List<ContentProperty> contentPropertyList = new List<ContentProperty>();

            foreach (var sheetName in Options.sheetNameList)
            {
                var content = VirtualFileNpoiReader.ReadToTreeNode<ContentInfo>(Options.FileName, sheetName);
                await convertToDefinitionWithTypeAsync(content, sheetName: sheetName);
            }
            await ContentsStore.ContentDefinition.InsertManyAsync(contentDefinitionList,true);

            //TODO patch
            await ContentsStore.ContentProperty.InsertManyAsync(contentPropertyList, true);

            async Task convertToDefinitionWithTypeAsync(List<ContentInfo> data, ContentDefinition definition = default, string sheetName = null)
            {
                foreach (var item in data)
                {
                    ContentDefinition contentDefinition=null;
                    if (item.Children.Count > 0)
                    {
                        //definition
                        
                        switch (sheetName)
                        {
                            case "BlogPost":
                                contentDefinition = await ContentsStore.CreateContentDefinitionAsync<BlogPost>(item.DisplayName);
                                break;
                            case "Page":
                                contentDefinition = await ContentsStore.CreateContentDefinitionAsync<Page>(item.DisplayName);
                                break;
                        }

                        contentDefinitionList.Add(contentDefinition);
                        //await ContentsStore.ContentDefinition.InsertAsync(contentDefinition, true);
                        await convertToDefinitionWithTypeAsync(item.Children, definition: contentDefinition, sheetName: sheetName);
                    }
                    else
                    {
                        //type
                        ContentProperty contentType = await ContentsStore.CreateContentPropertyAsync(definition, item.DisplayName, Enum.Parse<DataType>(item.Type));
                        contentPropertyList.Add(contentType);
                    }
                }
            }
        }
    }
}
