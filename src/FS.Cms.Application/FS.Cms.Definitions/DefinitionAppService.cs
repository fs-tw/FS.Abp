using FS.Abp.CodingManagement.Coding;
using FS.Abp.Files;
using FS.Cms.Core;
using FS.Cms.Posts;
using FS.Cms.Storage;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.SettingManagement;
using Volo.Abp.Users;

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

        private IStorageManager _storageManager;
        public IStorageManager StorageManager => LazyGetRequiredService(ref _storageManager);

        private IFileManager fileManager;
        protected IFileManager FileManager => this.LazyGetRequiredService(ref fileManager);

        private readonly IPostRepository postsRepository;
        private readonly ICurrentUser currentUser;
        private readonly UserManager<IdentityUser> userManager;
        private readonly IAuthorizationService authorizationService;
        private readonly ICurrentCodes currentCodes;
        private readonly IStorageDefinitionSettingFactory storageDefinitionSettingFactory;
        private readonly ISettingManager settingManager;
        private readonly IBlogDefinitionSettingFactory blogDefinitionSettingFactory;


        public DefinitionsAppService(
            IPostRepository postsRepository,
            ICurrentUser currentUser,
            UserManager<IdentityUser> userManager,
            IAuthorizationService authorizationService,
            ICurrentCodes currentCodes,
            IStorageDefinitionSettingFactory storageDefinitionSettingFactory,
            ISettingManager settingManager,
            IBlogDefinitionSettingFactory blogDefinitionSettingFactory
            )
        {
            this.postsRepository = postsRepository;
            this.currentUser = currentUser;
            this.userManager = userManager;
            this.authorizationService = authorizationService;
            this.currentCodes = currentCodes;
            this.storageDefinitionSettingFactory = storageDefinitionSettingFactory;
            this.settingManager = settingManager;
            this.blogDefinitionSettingFactory = blogDefinitionSettingFactory;
        }

    }
}
