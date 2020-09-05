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

namespace FS.Cms.Posts
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/PostAttachmentFiles")]
    public class PostAttachmentFilesController : CmsController
    {
        private readonly IPostAttachmentFilesCrudAppService postAttachmentFilesCrudAppService;

        public PostAttachmentFilesController(
            IPostAttachmentFilesCrudAppService postAttachmentFilesCrudAppService
            ) {
            this.postAttachmentFilesCrudAppService = postAttachmentFilesCrudAppService;
        }

        [HttpPost]
        public Task<PostAttachmentFilesWithDetailsDto> CreateAsync(PostAttachmentFilesCreateInput input)
        {
            return postAttachmentFilesCrudAppService.CreateAsync(input);
        }

        [HttpDelete]
        public Task DeleteAsync(Guid id)
        {
            return postAttachmentFilesCrudAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("{id}")]
        public Task<PostAttachmentFilesWithDetailsDto> GetAsync(Guid id)
        {
            return postAttachmentFilesCrudAppService.GetAsync(id);
        }

        [HttpGet]
        [Route("list")]
        public Task<PagedResultDto<PostAttachmentFilesWithDetailsDto>> GetListAsync(PostAttachmentFilesGetListInput input)
        {
            return postAttachmentFilesCrudAppService.GetListAsync(input);
        }

        [HttpPut]
        public Task<PostAttachmentFilesWithDetailsDto> UpdateAsync(Guid id, PostAttachmentFilesUpdateInput input)
        {
            return postAttachmentFilesCrudAppService.UpdateAsync(id, input);
        }
    }
}
