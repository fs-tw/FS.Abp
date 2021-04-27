﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.FormManagement.FormResponses.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.FormManagement.FormResponses
{
    public partial class FormResponsesApi //: IFormResponseCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("form-response/id")]
        [NonAction][RemoteService(false)]
        public Task<FormResponseWithDetailsDto> GetAsync([FromQuery] FormResponsePrimaryKeyDto FormResponsePrimaryKey)
        {
            return this.FormResponseCrudAppService.GetAsync(FormResponsePrimaryKey);
        }

        [HttpGet]
        [Route("form-response")]
        [RemoteService(true)]
        public Task<PagedResultDto<FormResponseWithDetailsDto>> GetListAsync(FormResponseGetListDto FormResponseGetList)
        {
            return this.FormResponseCrudAppService.GetListAsync(FormResponseGetList);
        }

        [HttpPost]
        [Route("form-response")]
        [NonAction][RemoteService(false)]
        public Task<FormResponseWithDetailsDto> CreateAsync(FormResponseCreateDto FormResponseCreate)
        {
            return this.FormResponseCrudAppService.CreateAsync(FormResponseCreate);
        }

        [HttpPut]
        [Route("form-response/id")]
        [NonAction][RemoteService(false)]
        public Task<FormResponseWithDetailsDto> UpdateAsync([FromQuery] FormResponsePrimaryKeyDto FormResponsePrimaryKey, FormResponseUpdateDto FormResponseUpdate)
        {
            return this.FormResponseCrudAppService.UpdateAsync(FormResponsePrimaryKey,FormResponseUpdate);
        }

        [HttpDelete]
        [Route("form-response/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] FormResponsePrimaryKeyDto FormResponsePrimaryKey)
        {
            return this.FormResponseCrudAppService.DeleteAsync(FormResponsePrimaryKey);
        }
    }
}
