﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.3.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Routes.Dtos
{
    public partial class MetaData
    {
        public RouteDefinitionPrimaryKeyDto RouteDefinitionPrimaryKeyDto => new RouteDefinitionPrimaryKeyDto();
        public RouteDefinitionDto RouteDefinitionDto => new RouteDefinitionDto();
        public RouteDefinitionCreateDto RouteDefinitionCreateDto => new RouteDefinitionCreateDto();
        public RouteDefinitionUpdateDto RouteDefinitionUpdateDto => new RouteDefinitionUpdateDto();
        public RouteDefinitionGetListDto RouteDefinitionGetListDto => new RouteDefinitionGetListDto();
        public RouteDefinitionWithDetailsDto RouteDefinitionWithDetailsDto => new RouteDefinitionWithDetailsDto();
    }

    public partial class RouteDefinitionPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class RouteDefinitionDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

    }

    public partial class RouteDefinitionCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

    }

    public partial class RouteDefinitionUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

    }

    public partial class RouteDefinitionGetListDto : SearchResultRequestDto
    {
    }

    public partial class RouteDefinitionWithDetailsDto : RouteDefinitionDto
    {
        public List<RouteDto> Routes { get; set; }

    }
}
