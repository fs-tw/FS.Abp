using FS.Abp.CodingManagement.Coding;
using FS.Abp.VirtualFileSystem;
using FS.Cms.Data.Posts;
using FS.Cms.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;


namespace FS.Cms.DataSeed.Seeder
{
   
    public class PostSeeder : ITransientDependency
    {
        private const string jsonFile = "/Files/Data/Posts/Posts.json";
        public IGuidGenerator _guidGenerator { get; set; }
        public IVirtualFileJsonReader _virtualFileJsonReader { get; set; }
        public IPostRepository _postRepository { get; set; }
        public ICodesTreeRepository _codesTreeRepository { get; set; }

      
        public async Task SeedAsync(DataSeedContext context)
        {
            var tenantId = context.TenantId;
            var sourceData = this._virtualFileJsonReader.ReadJson<List<PostJson>>(jsonFile);

            var hasData = this._postRepository.Count() > 0;
            if (hasData) return;


            for (var i = 0; i < sourceData.Count; i++)
            {
                var postJson = sourceData[i];

                var codes = this._codesTreeRepository.ToList();
                var blogCode = this._codesTreeRepository.Where(x => x.No == postJson.BlogCode).FirstOrDefault();
                if (blogCode == null) throw new Exception($"coding沒有{postJson.BlogCode}的No。");

                var time = DateTime.Now;


                var domain = new Post()
                {
                    BlogCodeId = blogCode.Id,
                    Title = postJson.Title,
                    Content = "",
                    Published = true,
                    Published_At = postJson.IsExpiryDate ? time.AddDays(-1) : time.AddDays(1),
                    DisplayMode = DisplayMode.內文,
                    PostImages = new List<PostImage>(),
                    AttachmentFileUrls = new List<string>(),
                    TenantId = context.TenantId,
                    Sequence = i
                };

                EntityHelper.TrySetId(domain, _guidGenerator.Create, true);

                await this._postRepository.InsertAsync(domain);
            }
        }
    }
}
