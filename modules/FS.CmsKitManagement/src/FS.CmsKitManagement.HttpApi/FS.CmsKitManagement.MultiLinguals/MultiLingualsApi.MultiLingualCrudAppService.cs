using FS.CmsKitManagement.MultiLinguals.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualsApi : IMultiLingualCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("multi-lingual/find")]
        public Task<MultiLingualWithDetailsDto> FindAsync(MultiLingualFindDto input)
        {
            return MultiLingualCrudAppService.FindAsync(input);
        }
        [HttpPut]
        [Route("multi-lingual/patch")]
        public async Task PatchAsync(MultiLingualPatchDto input)
        {
            await MultiLingualCrudAppService.PatchAsync(input);
        }
    }
}
