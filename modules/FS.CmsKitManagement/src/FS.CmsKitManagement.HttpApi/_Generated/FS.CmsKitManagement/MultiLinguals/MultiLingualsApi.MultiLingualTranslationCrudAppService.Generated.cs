﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.CmsKitManagement.MultiLinguals.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualsApi //: IMultiLingualTranslationCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("multi-lingual-translation/id")]
        [NonAction][RemoteService(false)]
        public Task<MultiLingualTranslationWithDetailsDto> GetAsync([FromQuery] MultiLingualTranslationPrimaryKeyDto MultiLingualTranslationPrimaryKey)
        {
            return this.MultiLingualTranslationCrudAppService.GetAsync(MultiLingualTranslationPrimaryKey);
        }

        [HttpGet]
        [Route("multi-lingual-translation")]
        [NonAction][RemoteService(false)]
        public Task<PagedResultDto<MultiLingualTranslationWithDetailsDto>> GetListAsync(MultiLingualTranslationGetListDto MultiLingualTranslation)
        {
            return this.MultiLingualTranslationCrudAppService.GetListAsync(MultiLingualTranslation);
        }

        [HttpPost]
        [Route("multi-lingual-translation")]
        [NonAction][RemoteService(false)]
        public Task<MultiLingualTranslationWithDetailsDto> CreateAsync(MultiLingualTranslationCreateDto MultiLingualTranslation)
        {
            return this.MultiLingualTranslationCrudAppService.CreateAsync(MultiLingualTranslation);
        }

        [HttpPut]
        [Route("multi-lingual-translation/id")]
        [NonAction][RemoteService(false)]
        public Task<MultiLingualTranslationWithDetailsDto> UpdateAsync([FromQuery] MultiLingualTranslationPrimaryKeyDto MultiLingualTranslationPrimaryKey, MultiLingualTranslationUpdateDto MultiLingualTranslation)
        {
            return this.MultiLingualTranslationCrudAppService.UpdateAsync(MultiLingualTranslationPrimaryKey,MultiLingualTranslation);
        }

        [HttpDelete]
        [Route("multi-lingual-translation/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] MultiLingualTranslationPrimaryKeyDto MultiLingualTranslationPrimaryKey)
        {
            return this.MultiLingualTranslationCrudAppService.DeleteAsync(MultiLingualTranslationPrimaryKey);
        }
    }
}