﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Theme.Banners.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Theme.Banners
{
    public partial class BannersApi //: IBannerDefinitionCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("banner-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<BannerDefinitionWithDetailsDto> GetAsync([FromQuery] BannerDefinitionPrimaryKeyDto BannerDefinitionPrimaryKey)
        {
            return this.BannerDefinitionCrudAppService.GetAsync(BannerDefinitionPrimaryKey);
        }

        [HttpGet]
        [Route("banner-definition")]
        [RemoteService(true)]
        public Task<PagedResultDto<BannerDefinitionWithDetailsDto>> GetListAsync(BannerDefinitionGetListDto BannerDefinitionGetList)
        {
            return this.BannerDefinitionCrudAppService.GetListAsync(BannerDefinitionGetList);
        }

        [HttpPost]
        [Route("banner-definition")]
        [NonAction][RemoteService(false)]
        public Task<BannerDefinitionWithDetailsDto> CreateAsync(BannerDefinitionCreateDto BannerDefinitionCreate)
        {
            return this.BannerDefinitionCrudAppService.CreateAsync(BannerDefinitionCreate);
        }

        [HttpPut]
        [Route("banner-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<BannerDefinitionWithDetailsDto> UpdateAsync([FromQuery] BannerDefinitionPrimaryKeyDto BannerDefinitionPrimaryKey, BannerDefinitionUpdateDto BannerDefinitionUpdate)
        {
            return this.BannerDefinitionCrudAppService.UpdateAsync(BannerDefinitionPrimaryKey,BannerDefinitionUpdate);
        }

        [HttpDelete]
        [Route("banner-definition/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] BannerDefinitionPrimaryKeyDto BannerDefinitionPrimaryKey)
        {
            return this.BannerDefinitionCrudAppService.DeleteAsync(BannerDefinitionPrimaryKey);
        }
    }
}
