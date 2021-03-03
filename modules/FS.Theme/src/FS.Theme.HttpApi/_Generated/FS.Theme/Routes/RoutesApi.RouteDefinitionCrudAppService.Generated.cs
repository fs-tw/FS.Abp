﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Theme.Routes.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Theme.Routes
{
    public partial class RoutesApi //: IRouteDefinitionCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("route-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<RouteDefinitionWithDetailsDto> GetAsync([FromQuery] RouteDefinitionPrimaryKeyDto RouteDefinitionPrimaryKey)
        {
            return this.RouteDefinitionCrudAppService.GetAsync(RouteDefinitionPrimaryKey);
        }

        [HttpGet]
        [Route("route-definition")]
        [RemoteService(true)]
        public Task<PagedResultDto<RouteDefinitionWithDetailsDto>> GetListAsync(RouteDefinitionGetListDto RouteDefinitionGetList)
        {
            return this.RouteDefinitionCrudAppService.GetListAsync(RouteDefinitionGetList);
        }

        [HttpPost]
        [Route("route-definition")]
        [NonAction][RemoteService(false)]
        public Task<RouteDefinitionWithDetailsDto> CreateAsync(RouteDefinitionCreateDto RouteDefinitionCreate)
        {
            return this.RouteDefinitionCrudAppService.CreateAsync(RouteDefinitionCreate);
        }

        [HttpPut]
        [Route("route-definition/id")]
        [NonAction][RemoteService(false)]
        public Task<RouteDefinitionWithDetailsDto> UpdateAsync([FromQuery] RouteDefinitionPrimaryKeyDto RouteDefinitionPrimaryKey, RouteDefinitionUpdateDto RouteDefinitionUpdate)
        {
            return this.RouteDefinitionCrudAppService.UpdateAsync(RouteDefinitionPrimaryKey,RouteDefinitionUpdate);
        }

        [HttpDelete]
        [Route("route-definition/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] RouteDefinitionPrimaryKeyDto RouteDefinitionPrimaryKey)
        {
            return this.RouteDefinitionCrudAppService.DeleteAsync(RouteDefinitionPrimaryKey);
        }
    }
}