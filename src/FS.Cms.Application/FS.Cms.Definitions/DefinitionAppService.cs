using FS.Abp.CodingManagement.Coding;
using FS.Cms.Core;
using FS.Cms.Posts;
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
        private readonly ICodesService _codesService;
        private readonly IPostRepository postsRepository;
        private readonly ICurrentCodes currentCodes;
        private readonly ISettingManager settingManager;
        private readonly IBlogDefinitionSettingFactory blogDefinitionSettingFactory;
        private readonly ICodesTreeRepository _codesTreeRepository;


        public DefinitionsAppService(
            ICodesService codesService,
            IPostRepository postsRepository,
            ICurrentCodes currentCodes,
            ISettingManager settingManager,
            IBlogDefinitionSettingFactory blogDefinitionSettingFactory,
            ICodesTreeRepository codesTreeRepository
            )
        {
            _codesService = codesService;
            this.postsRepository = postsRepository;
            this.currentCodes = currentCodes;
            this.settingManager = settingManager;
            this.blogDefinitionSettingFactory = blogDefinitionSettingFactory;
            _codesTreeRepository = codesTreeRepository;
        }

    }
}
