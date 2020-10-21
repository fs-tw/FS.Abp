using FS.Abp.CodingManagement.Coding;
using FS.Cms.Core;
using FS.Cms.Posts;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.SettingManagement;

namespace FS.Cms.Definitions
{

    [ExposeServices(
        typeof(IDefinitionsAppService),
        typeof(IBlogAppService)
        )]
    public partial class DefinitionsAppService : CmsAppService, IDefinitionsAppService
    {
        private ICodingStore _codingStore;
        public ICodingStore CodingStore => LazyGetRequiredService(ref _codingStore);
        private readonly IPostRepository postsRepository;
        private readonly IAuthorizationService authorizationService;
        private readonly ICurrentCodes currentCodes;
        private readonly ISettingManager settingManager;
        private readonly IBlogDefinitionSettingFactory blogDefinitionSettingFactory;


        public DefinitionsAppService(
            IPostRepository postsRepository,
            IAuthorizationService authorizationService,
            ICurrentCodes currentCodes,
            ISettingManager settingManager,
            IBlogDefinitionSettingFactory blogDefinitionSettingFactory
            )
        {
            this.postsRepository = postsRepository;
            this.authorizationService = authorizationService;
            this.currentCodes = currentCodes;
            this.settingManager = settingManager;
            this.blogDefinitionSettingFactory = blogDefinitionSettingFactory;
        }

    }
}
