﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.CmsKitManagement.EntityBlogs.Dtos
{

    public partial class EntityBlogPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class EntityBlogDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

        public virtual System.Guid BlogId { get; set; }

    }

    public partial class EntityBlogCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

        public virtual System.Guid BlogId { get; set; }

    }

    public partial class EntityBlogUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

        public virtual System.Guid BlogId { get; set; }

    }

    public partial class EntityBlogGetListDto : SearchResultRequestDto
    {
    }

    public partial class EntityBlogWithDetailsDto : EntityBlogDto
    {
    }
}
