using FS.Abp.Npoi.Mapper;
using FS.Abp.Npoi.Mapper.Attributes;
using FS.CmsKitManagement.Contents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Demo.DbMigrator.Data
{
    public class ContentsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }

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
        protected IContentDefinitionRepository contentDefinitionRepository => this.LazyServiceProvider.LazyGetRequiredService<IContentDefinitionRepository>();
        protected IContentTypeRepository contentTypeRepository => this.LazyServiceProvider.LazyGetRequiredService<IContentTypeRepository>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            var existedDatasCount = await contentDefinitionRepository.GetCountAsync();
            if (existedDatasCount > 0)
                return;

            List<string> entityTypeList = new List<string>{ "Blog", "BlogPost", "Page" };
            async Task convertToDefinitionWithTypeAsync(List<ContentInfo> data,Guid definitionId = default,string entityType = null)
            {
                foreach(var item in data)
                {
                    if (item.Children.Count > 0)
                    {
                        //definition
                        ContentDefinition contentDefinition = new ContentDefinition
                        {
                            DisplayName = item.DisplayName,
                            EntityType = entityType
                        };
                        await contentDefinitionRepository.InsertAsync(contentDefinition, true);
                        await convertToDefinitionWithTypeAsync(item.Children, definitionId:contentDefinition.Id, entityType: entityType);
                    }
                    else
                    {
                        //type
                        ContentType contentType = new ContentType
                        {
                            DisplayName = item.DisplayName,
                            ContentDefinitionId = definitionId,
                            Type =item.Type
                        };
                        await contentTypeRepository.InsertAsync(contentType, true);
                    }
                }
            }

            foreach (var entityType in entityTypeList)
            {
                var content = VirtualFileNpoiReader.ReadToTreeNode<ContentInfo>(Options.FileName, entityType);
                await convertToDefinitionWithTypeAsync(content, entityType: entityType);
            }
        }
    }
}
