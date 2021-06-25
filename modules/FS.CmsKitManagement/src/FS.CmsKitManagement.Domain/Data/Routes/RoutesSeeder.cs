using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyAbp.Abp.Trees;
using FS.Abp.Data;
using FS.Abp.Npoi.Mapper;
using FS.Abp.Npoi.Mapper.Attributes;
using FS.CmsKitManagement.Routes;
using Npoi.Mapper.Attributes;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities;

namespace FS.CmsKitManagement.Data.Routes
{
    public class RoutesSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }

        public string FileName { get; set; }
    }

    public class RoutesSeeder : FS.Abp.Data.Seeder<RoutesSeederOptions>
    {
        protected readonly string PublicDefinitionNo = "Public";

        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();

        protected IRoutesStore RoutesStore => this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            var definition = context.GetProperty<RouteDefinition>()[this.PublicDefinitionNo];

            var sheetNames = this.VirtualFileNpoiReader.GetSheetNames(Options.FileName);
            foreach (var sheetName in sheetNames)
            {
                var items = this.VirtualFileNpoiReader.ReadToTreeNode<RoutesInfo>(Options.FileName, sheetName);
                var entities = mapToEntity<RoutesInfo, Route>(items);
                //var vocabularys = items.Select(i => mapTo(definition.Id, null, i));

                //await this.VocabulariesStore.VocabularyDefinition.InsertAsync(definition, true);
                //await this.VocabulariesStore.Vocabulary.InsertManyAsync(vocabularys, true);
            };
        }

        protected List<TEntity> mapToEntity<TInfo, TEntity>(List<TInfo> datas)
            where TInfo : ITreeNode<TInfo>
            where TEntity : class, ITree<TEntity>, new()
        {
            var result = new List<TEntity>();

            return result;

            List<TEntity> infoTreeToEntityList(List<TInfo> datas)
            {
                var result = new List<TEntity>();
                foreach(var item in datas)
                {
                    TEntity entity = new TEntity();
                    EntityHelper.TrySetId(entity, this.GuidGenerator.Create);
                }
                return result;
            }
        }
    }

    [LevelStartAt(2)]
    public class RoutesInfo : ITreeNode<RoutesInfo>
    {
        [Column("代碼")]
        public string No { get; set; }
        [Column("名稱")]
        public string DisplayName { get; set; }

        public List<RoutesInfo> Children { get; set; }
        public string Code { get; set; }
    }


}
