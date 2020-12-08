using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.Cms.Tags
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/tags")]
    [ControllerName("Tags Cms")]
    public partial class TagsApi : CmsController, ITagApi
    {
        private readonly ITagAppService tagAppService;

        public TagsApi(
            ITagAppService tagAppService
            ) 
        {
            this.tagAppService = tagAppService;
        }

    
    }
}
