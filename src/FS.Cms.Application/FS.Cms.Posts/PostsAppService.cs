
using FS.Abp.Application;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Posts.Dtos;
using FS.Abp.Files;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
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
using Volo.Abp.Settings;

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
        private readonly ISettingProvider settingProvider;
        private readonly IGuidGenerator guidGenerator;
        private readonly IConfiguration configuration;
        //private readonly IPostAttachmentFilesManager postAttachmentFilesManager;
        private readonly IAuthorizationService authorizationService;
        private readonly ICodesTreeRepository codesTreeRepository;
        private readonly IHostEnvironment env;

        public PostsAppService(
            IPostRepository postsRepository,
            IFileManager fileManager,
            ISettingProvider settingProvider,  
            IGuidGenerator guidGenerator,
            IConfiguration configuration,
            IAuthorizationService authorizationService,
            ICodesTreeRepository codesTreeRepository,
            IHostEnvironment env
            ) : base(postsRepository)
        {
            this.postsRepository = postsRepository;
            this.fileManager = fileManager;
            this.settingProvider = settingProvider;
            this.guidGenerator = guidGenerator;
            this.configuration = configuration;
            this.authorizationService = authorizationService;
            this.codesTreeRepository = codesTreeRepository;
            this.env = env;
        }
    }
}
