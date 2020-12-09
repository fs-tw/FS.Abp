using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Volo.Abp.Domain.Services;
using Volo.Abp.MultiTenancy;

namespace FS.Cms.Posts
{
    public class PostsManager : DomainService, IPostsManager
    {
        private readonly IPostRepository postsRepository;
        //private readonly ICodesTreeRepository codesTreeRepository;
        private readonly ICurrentTenant currentTenant;

        public PostsManager(
              IPostRepository postsRepository,
              //ICodesTreeRepository codesTreeRepository,
              ICurrentTenant currentTenant
              )
        {
            this.postsRepository = postsRepository;
            //this.codesTreeRepository = codesTreeRepository;
            this.currentTenant = currentTenant;
        }


        //public IOrderedQueryable<Posts.Post> CheckPublished_AtForPermission(Guid? blogCodeId, bool permission)
        //{
        //    var blogIds = this.postsRepository.Select(x => x.BlogCodeId).Distinct().ToList();
        //    var blogCodes = this.codesTreeRepository.Where(x => blogIds.Any(b => b == x.Id) && x.Enable == true).Select(x => x.Id).ToList();

        //    var query = this.postsRepository
        //                    .WithDetails()
        //                    .Where(x=>x.TenantId == this.currentTenant.Id)
        //                    .WhereIf(!permission, x => blogCodes.Any(b => x.BlogCodeId == b))
        //                    .WhereIf(blogCodeId.HasValue, x => x.BlogCodeId == blogCodeId)
        //                    .WhereIf(!permission, x => x.Published_At <= DateTime.Now && x.Published == true)
        //                    .OrderBy(x => x.Sequence);

        //    return query;
        //}
    }
}
