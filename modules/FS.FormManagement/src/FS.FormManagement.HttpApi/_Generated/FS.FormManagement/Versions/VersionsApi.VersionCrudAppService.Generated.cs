﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.FormManagement.Versions.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.FormManagement.Versions
{
    public partial class VersionsApi //: IVersionCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("version/id")]
        [NonAction][RemoteService(false)]
        public Task<VersionWithDetailsDto> GetAsync([FromQuery] VersionPrimaryKeyDto VersionPrimaryKey)
        {
            return this.VersionCrudAppService.GetAsync(VersionPrimaryKey);
        }

        [HttpGet]
        [Route("version")]
        [RemoteService(true)]
        public Task<PagedResultDto<VersionWithDetailsDto>> GetListAsync(VersionGetListDto VersionGetList)
        {
            return this.VersionCrudAppService.GetListAsync(VersionGetList);
        }

        [HttpPost]
        [Route("version")]
        [NonAction][RemoteService(false)]
        public Task<VersionWithDetailsDto> CreateAsync(VersionCreateDto VersionCreate)
        {
            return this.VersionCrudAppService.CreateAsync(VersionCreate);
        }

        [HttpPut]
        [Route("version/id")]
        [NonAction][RemoteService(false)]
        public Task<VersionWithDetailsDto> UpdateAsync([FromQuery] VersionPrimaryKeyDto VersionPrimaryKey, VersionUpdateDto VersionUpdate)
        {
            return this.VersionCrudAppService.UpdateAsync(VersionPrimaryKey,VersionUpdate);
        }

        [HttpDelete]
        [Route("version/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] VersionPrimaryKeyDto VersionPrimaryKey)
        {
            return this.VersionCrudAppService.DeleteAsync(VersionPrimaryKey);
        }
    }
}
