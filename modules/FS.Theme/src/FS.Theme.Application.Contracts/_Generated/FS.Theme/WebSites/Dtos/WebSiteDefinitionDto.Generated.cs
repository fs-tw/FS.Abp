﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.Theme.WebSites.Dtos
{
    public partial class MetaData
    {
        public WebSiteDefinitionPrimaryKeyDto WebSiteDefinitionPrimaryKeyDto => new WebSiteDefinitionPrimaryKeyDto();
        public WebSiteDefinitionDto WebSiteDefinitionDto => new WebSiteDefinitionDto();
        public WebSiteDefinitionCreateDto WebSiteDefinitionCreateDto => new WebSiteDefinitionCreateDto();
        public WebSiteDefinitionUpdateDto WebSiteDefinitionUpdateDto => new WebSiteDefinitionUpdateDto();
        public WebSiteDefinitionGetListDto WebSiteDefinitionGetListDto => new WebSiteDefinitionGetListDto();
        public WebSiteDefinitionWithDetailsDto WebSiteDefinitionWithDetailsDto => new WebSiteDefinitionWithDetailsDto();
    }

    public partial class WebSiteDefinitionPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class WebSiteDefinitionDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string LogoFileId { get; set; }

        public virtual string Title { get; set; }

        public virtual string FaviconFileId { get; set; }

        public virtual int Count { get; set; }

        public virtual string Copyright { get; set; }

    }

    public partial class WebSiteDefinitionCreateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string LogoFileId { get; set; }

        public virtual string Title { get; set; }

        public virtual string FaviconFileId { get; set; }

        public virtual int Count { get; set; }

        public virtual string Copyright { get; set; }

    }

    public partial class WebSiteDefinitionUpdateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string LogoFileId { get; set; }

        public virtual string Title { get; set; }

        public virtual string FaviconFileId { get; set; }

        public virtual int Count { get; set; }

        public virtual string Copyright { get; set; }

    }

    public partial class WebSiteDefinitionGetListDto : SearchResultRequestDto
    {
    }

    public partial class WebSiteDefinitionWithDetailsDto : WebSiteDefinitionDto
    {
    }
}
