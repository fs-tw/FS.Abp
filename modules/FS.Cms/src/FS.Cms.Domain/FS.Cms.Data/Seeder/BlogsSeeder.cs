using FS.Abp.Npoi.Mapper;
using FS.Cms.Blogs;
using FS.Cms.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;

namespace FS.Cms.Data.Seeder
{
    public class BlogsSeeder : ITransientDependency
    {
        public IGuidGenerator _guidGenerator { get; set; }
        public IBlogsStore _blogsStore { get; set; }
        public IVirtualFileNpoiReader _virtualFileNpoiReader { get; set; }

        /// <summary>
        /// 匯入Excel，需有表格名稱為Blog
        /// </summary>
        /// <param name="context"></param>
        /// <param name="virtualFilePath"></param>
        /// <returns></returns>
        public async Task SeedAsync(DataSeedContext context, string virtualFilePath)
        {
            var hasDatas = (await this._blogsStore.Blog.GetCountAsync()) > 0;
            if (hasDatas) return;

            try
            {
                var blogs = _virtualFileNpoiReader.Read<BlogImportModel>(virtualFilePath, "Blog");

                await createBlogs(context, blogs).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                throw new Exception("[CmsBlog]匯入Blog失敗:", ex);
            }
        }

        private async Task createBlogs(DataSeedContext context, List<BlogImportModel> sourceData)
        {
            var duplicateNos = sourceData.GroupBy(x => x.No).Where(x => x.Count() > 1).ToList();
            if (duplicateNos.Any()) throw new Exception($"發現重複的No，無法匯入\r\n");

            //使用深度GroupBy，然後正序排序
            var dataGroupOrderedByDepth = createDataOrderedByDepth(sourceData);

            //紀錄已經產生的項目被分配到的Id是什麼，這樣才能設定ParentId
            //key: no,value: id
            var noIdDicionary = new Dictionary<string, Guid>();

            //使用BFS的順序產生資料
            foreach (var depthGroup in dataGroupOrderedByDepth)
            {
                await createBlogByDepth(context, noIdDicionary, depthGroup).ConfigureAwait(false);
            }
        }

        private static List<IGrouping<int, (BlogImportModel sourceData, int depth)>> createDataOrderedByDepth(List<BlogImportModel> sourceData)
        {
            return sourceData.Select(sourceData =>
            {
                var depth = sourceData.No.Split(".").Count();
                return (sourceData, depth);
            })
            .GroupBy(x => x.depth)
            .OrderBy(x => x.Key)
            .ToList();
        }

        private async Task createBlogByDepth(DataSeedContext context, Dictionary<string, Guid> noIdDicionary, IGrouping<int, (BlogImportModel sourceData, int depth)> depthGroup)
        {
            int sequence = 0;
            foreach (var data in depthGroup)
            {
                var item = data.sourceData;

                Blog blog = new Blog();
                blog.No = item.No.Trim();
                blog.DisplayName = item.DisplayName;
                blog.Description = item.Description;
                blog.Disable = false;
                blog.Sequence = sequence;
                blog.TenantId = context.TenantId;

                if (data.depth != 1)
                {
                    var parentNo = blog.No.Substring(0, blog.No.LastIndexOf("."));
                    blog.ParentId = noIdDicionary[parentNo];
                }

                EntityHelper.TrySetId(blog, () => this._guidGenerator.Create(), true);

                noIdDicionary.Add(blog.No, blog.Id);

                await this._blogsStore.Blog.InsertAsync(blog, true).ConfigureAwait(false);

                sequence++;
            }
        }
    }
}