﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.4
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace FS.Entity.MultiLinguals.Dtos
{

    public partial class MultiLingualDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

    }

    public partial class MultiLingualCreateDto
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

    }

    public partial class MultiLingualUpdateDto
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }

    }

    public partial class MultiLingualGetListDto : PagedAndSortedResultRequestDto
    {
    }

    public partial class MultiLingualWithDetailsDto : MultiLingualDto
    {
        public List<MultiLingualTranslationDto> MultiLingualTranslations { get; set; }

    }
}
