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

            var existDataNos = await this.AsyncExecuter.ToListAsync(this.RoutesStore.Route
                .Where(x => !x.ParentId.HasValue)
                .Select(x => x.No));

            var sheetNames = this.VirtualFileNpoiReader.GetSheetNames(Options.FileName);
            foreach (var sheetName in sheetNames)
            {
                var itemTrees = this.VirtualFileNpoiReader.ReadToTreeNode<RoutesInfo>(Options.FileName, sheetName);
                itemTrees = itemTrees.Where(x => !existDataNos.Contains(x.No)).ToList(); // 僅新增目前不存在的 No

                var entityTrees = mapToEntity<RoutesInfo, Route>(itemTrees, null);

                var items = this.treeToList(itemTrees);
                var entities = this.treeToList(entityTrees);

                foreach (var entity in entities)
                {
                    var item = items.SingleOrDefault(x => x.Code == entity.Code);
                    if (item == null) continue;

                    entity.No = item.No;
                    entity.RouteDefinitionId = definition.Id;
                    entity.UrlType = UrlType.內部連結;
                    entity.IsHidden = false;
                    entity.TenantId = this.CurrentTenant.Id;
                }

                await this.RoutesStore.Route.InsertManyAsync(entityTrees);
                existDataNos = existDataNos.Concat(entityTrees.Select(x => x.No).ToList()).ToList();
            };
        }

        protected List<TEntity> mapToEntity<TInfo, TEntity>(List<TInfo> datas, Guid? parentId)
            where TInfo : ITreeInfo<TInfo>
            where TEntity : class, ITree<TEntity>, new()
        {
            var result = infoTreeToEntityList(datas, parentId);

            return result;

            List<TEntity> infoTreeToEntityList(List<TInfo> datas, Guid? parentId)
            {
                var result = new List<TEntity>();
                foreach(var item in datas)
                {
                    TEntity entity = new TEntity();
                    entity.DisplayName = item.DisplayName;
                    entity.Code = item.Code;
                    entity.ParentId = parentId;
                    
                    EntityHelper.TrySetId(entity, this.GuidGenerator.Create);

                    entity.Children = infoTreeToEntityList(item.Children, entity.Id);

                    result.Add(entity);
                }
                return result;
            }
        }

        protected List<TTree> treeToList<TTree>(List<TTree> tree)
            where TTree : class
        {
            var result = new List<TTree>();
            foreach (var item in tree)
            {
                result.Add(item);

                var childrenProperty = typeof(TTree).GetProperty("Children").GetValue(item).As<List<TTree>>();
                var children = this.treeToList(childrenProperty);
                result = result.Concat(children).ToList();
            }

            return result;
        }
    }

    public interface ITreeInfo<T> : ITreeNode<T>
        where T : ITreeNode<T>
    {
        public string DisplayName { get; set; }
    }

    [LevelStartAt(2)]
    public class RoutesInfo : ITreeInfo<RoutesInfo>
    {
        [Column("代碼")]
        public string No { get; set; }
        [Column("名稱")]
        public string DisplayName { get; set; }

        public List<RoutesInfo> Children { get; set; }
        public string Code { get; set; }
    }


}
