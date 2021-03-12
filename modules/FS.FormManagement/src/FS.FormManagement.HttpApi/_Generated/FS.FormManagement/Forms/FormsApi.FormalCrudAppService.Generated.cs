﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.FormManagement.Forms.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.FormManagement.Forms
{
    public partial class FormsApi //: IFormalCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("formal/id")]
        [NonAction][RemoteService(false)]
        public Task<FormalWithDetailsDto> GetAsync([FromQuery] FormalPrimaryKeyDto FormalPrimaryKey)
        {
            return this.FormalCrudAppService.GetAsync(FormalPrimaryKey);
        }

        [HttpGet]
        [Route("formal")]
        [RemoteService(true)]
        public Task<PagedResultDto<FormalWithDetailsDto>> GetListAsync(FormalGetListDto FormalGetList)
        {
            return this.FormalCrudAppService.GetListAsync(FormalGetList);
        }

        [HttpPost]
        [Route("formal")]
        [NonAction][RemoteService(false)]
        public Task<FormalWithDetailsDto> CreateAsync(FormalCreateDto FormalCreate)
        {
            return this.FormalCrudAppService.CreateAsync(FormalCreate);
        }

        [HttpPut]
        [Route("formal/id")]
        [NonAction][RemoteService(false)]
        public Task<FormalWithDetailsDto> UpdateAsync([FromQuery] FormalPrimaryKeyDto FormalPrimaryKey, FormalUpdateDto FormalUpdate)
        {
            return this.FormalCrudAppService.UpdateAsync(FormalPrimaryKey,FormalUpdate);
        }

        [HttpDelete]
        [Route("formal/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] FormalPrimaryKeyDto FormalPrimaryKey)
        {
            return this.FormalCrudAppService.DeleteAsync(FormalPrimaryKey);
        }
    }
}
