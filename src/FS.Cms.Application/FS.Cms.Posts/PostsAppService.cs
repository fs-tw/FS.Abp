using FS.Abp.Application;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;

namespace FS.Cms.Posts
{
    [ExposeServices(
        typeof(IPostCrudAppService),
        typeof(IPostImagesAppService),
        typeof(IPostsAppService)
        )]
    public partial class PostsAppService : PostCrudAppService, IPostsAppService
    {
        private readonly IPostRepository postsRepository;
        private readonly IGuidGenerator guidGenerator;
        private readonly IPostAttachmentFilesManager postAttachmentFilesManager;
        private readonly IAuthorizationService authorizationService;
        private readonly ICodesTreeRepository codesTreeRepository;

        public PostsAppService(
            IPostRepository postsRepository,
            IGuidGenerator guidGenerator,
            IPostAttachmentFilesManager postAttachmentFilesManager,
            IAuthorizationService authorizationService,
            ICodesTreeRepository codesTreeRepository
            ) : base(postsRepository)
        {
            this.postsRepository = postsRepository;
            this.guidGenerator = guidGenerator;
            this.postAttachmentFilesManager = postAttachmentFilesManager;
            this.authorizationService = authorizationService;
            this.codesTreeRepository = codesTreeRepository;
        }
    }
}
