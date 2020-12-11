using FS.Cms.Blogs.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Blogs
{
    public partial class BlogsApi : IBlogCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("blog")]
        [RemoteService(true)]
        
        public async Task<ListResultDto<BlogDto>> GetListAllAsync()
        {
            return await this.BlogCrudAppService.GetListAllAsync();
        }
    }
}
