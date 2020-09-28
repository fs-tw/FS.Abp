using Microsoft.AspNetCore.Mvc;
using Volo.Abp;

namespace FS.Cms.Definitions
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/definitions")]
    [ControllerName("Definitions Cms")]
    public partial class DefinitionsController : CmsController
    {
        private readonly IDefinitionsAppService _appService;

        public DefinitionsController(
            IDefinitionsAppService appService
            )
        {
            _appService = appService;
        }

    }
}
