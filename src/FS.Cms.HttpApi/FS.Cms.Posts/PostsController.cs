using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Data;

namespace FS.Cms.Posts
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/posts")]
    public partial class PostsController : CmsController
    {
        private readonly IHostEnvironment _env;
        private readonly IPostsAppService _postsAppService;

        public PostsController(
            IHostEnvironment env,
            IPostsAppService postsAppService
            )
        {
            this._env = env;
            this._postsAppService = postsAppService;
        }
    }
}
