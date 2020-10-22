
using FS.Abp.Application;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Posts.Dtos;
using FS.Abp.Files;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Users;

namespace FS.Cms.Posts
{
    [ExposeServices(
        typeof(IPostCrudAppService),
        typeof(IPostsAppService)
        )]
    public partial class PostsAppService : PostCrudAppService, IPostsAppService
    {
        private readonly IPostRepository postsRepository;
        private readonly IFileManager fileManager;
        private readonly IGuidGenerator guidGenerator;
        private readonly IConfiguration configuration;
        private readonly IPostsManager postsManager;
        private readonly ICurrentUser currentUser;
        private readonly IAuthorizationService authorizationService;
        private readonly ICodesTreeRepository codesTreeRepository;

        public PostsAppService(
            IPostRepository postsRepository,
            IFileManager fileManager,
            IGuidGenerator guidGenerator,
            IConfiguration configuration,
            IPostsManager postsManager,
            ICurrentUser currentUser,
            IAuthorizationService authorizationService,
            ICodesTreeRepository codesTreeRepository
            ) : base(postsRepository)
        {
            this.postsRepository = postsRepository;
            this.fileManager = fileManager;
            this.guidGenerator = guidGenerator;
            this.configuration = configuration;
            this.postsManager = postsManager;
            this.currentUser = currentUser;
            this.authorizationService = authorizationService;
            this.codesTreeRepository = codesTreeRepository;
        }
    }
}
