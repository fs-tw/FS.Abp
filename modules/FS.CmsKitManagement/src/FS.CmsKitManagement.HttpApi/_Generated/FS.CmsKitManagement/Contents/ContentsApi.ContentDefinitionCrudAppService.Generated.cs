﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.CmsKitManagement.Contents.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Contents
{
    public partial class ContentsApi //: IContentDefinitionCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("content-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<ContentDefinitionWithDetailsDto> GetAsync([FromQuery] ContentDefinitionPrimaryKeyDto ContentDefinitionPrimaryKey)
        {
            return this.ContentDefinitionCrudAppService.GetAsync(ContentDefinitionPrimaryKey);
        }

        [HttpGet]
        [Route("content-definition")]
        [RemoteService(true)]
        public Task<PagedResultDto<ContentDefinitionWithDetailsDto>> GetListAsync(ContentDefinitionGetListDto ContentDefinition)
        {
            return this.ContentDefinitionCrudAppService.GetListAsync(ContentDefinition);
        }

        [HttpPost]
        [Route("content-definition")]
        [NonAction][RemoteService(false)]
        public Task<ContentDefinitionWithDetailsDto> CreateAsync(ContentDefinitionCreateDto ContentDefinition)
        {
            return this.ContentDefinitionCrudAppService.CreateAsync(ContentDefinition);
        }

        [HttpPut]
        [Route("content-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<ContentDefinitionWithDetailsDto> UpdateAsync([FromQuery] ContentDefinitionPrimaryKeyDto ContentDefinitionPrimaryKey, ContentDefinitionUpdateDto ContentDefinition)
        {
            return this.ContentDefinitionCrudAppService.UpdateAsync(ContentDefinitionPrimaryKey,ContentDefinition);
        }

        [HttpDelete]
        [Route("content-definition/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] ContentDefinitionPrimaryKeyDto ContentDefinitionPrimaryKey)
        {
            return this.ContentDefinitionCrudAppService.DeleteAsync(ContentDefinitionPrimaryKey);
        }
    }
}