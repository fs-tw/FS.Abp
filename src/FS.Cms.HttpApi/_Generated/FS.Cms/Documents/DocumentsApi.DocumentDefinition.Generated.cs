﻿//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.0
//
//------------------------------------------------------------------------------
using FS.Cms.Documents.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Documents
{
    public partial class DocumentsApi : IDocumentDefinitionCrudAppService //auto-generated
    {
        [HttpGet]
        [Route("document-definition/id")]
        [RemoteService(false)]
        public Task<DocumentDefinitionWithDetailsDto> GetAsync([FromQuery] DocumentDefinitionPrimaryKeyDto key)
        {
            return this.DocumentDefinitionCrudAppService.GetAsync(key);
        }

        [HttpGet]
        [Route("document-definition")]
        [RemoteService(false)]
        public Task<PagedResultDto<DocumentDefinitionWithDetailsDto>> GetListAsync(DocumentDefinitionGetListDto input)
        {
            return this.DocumentDefinitionCrudAppService.GetListAsync(input);
        }

        [HttpPost]
        [Route("document-definition")]
        [RemoteService(false)]
        public Task<DocumentDefinitionWithDetailsDto> CreateAsync(DocumentDefinitionCreateDto input)
        {
            return this.DocumentDefinitionCrudAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("document-definition/id")]
        [RemoteService(false)]
        public Task<DocumentDefinitionWithDetailsDto> UpdateAsync([FromQuery] DocumentDefinitionPrimaryKeyDto key, DocumentDefinitionUpdateDto input)
        {
            return this.DocumentDefinitionCrudAppService.UpdateAsync(key,input);
        }

        [HttpDelete]
        [Route("document-definition/id")]
        [RemoteService(false)]
        public Task DeleteAsync([FromQuery] DocumentDefinitionPrimaryKeyDto key)
        {
            return this.DocumentDefinitionCrudAppService.DeleteAsync(key);
        }
    }
}
