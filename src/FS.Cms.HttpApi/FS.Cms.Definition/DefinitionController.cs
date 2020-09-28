using FS.Abp.CodingManagement.Coding;
using FS.Cms;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc.MultiTenancy;

namespace FS.Cms.Definition
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/definition")]
    [ControllerName("Definition Cms")]
    public partial class DefinitionController : CmsController
    {
        private readonly IAbpTenantAppService _abpTenantAppService;
        private readonly IDefinitionAppService _appService;

        public DefinitionController(
            IAbpTenantAppService abpTenantAppService,
            IDefinitionAppService appService
            )
        {

            _appService = appService;
            _abpTenantAppService = abpTenantAppService;
        }

    }
}
