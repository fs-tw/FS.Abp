﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;

namespace FS.Cms.Posts
{
    [Area("cms")]
    [RemoteService(true)]
    [ControllerName("Posts Api")]
    [Route("api/cms/posts")]
    public partial class PostsApi : CmsController //auto-generated IPostsApi
    {
        IPostsAppService _PostsAppService;
        protected IPostsAppService PostsAppService => this.LazyGetRequiredService(ref _PostsAppService);

        IPostCrudAppService _PostCrudAppService;
        protected IPostCrudAppService PostCrudAppService => this.LazyGetRequiredService(ref _PostCrudAppService);

        IPostTagMapCrudAppService _PostTagMapCrudAppService;
        protected IPostTagMapCrudAppService PostTagMapCrudAppService => this.LazyGetRequiredService(ref _PostTagMapCrudAppService);


    }
}
