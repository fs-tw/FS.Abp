﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 5.1.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace FS.Coding.SerialNumbers.Dtos
{

    public partial class SerialNumberDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string ProviderName { get; set; }

        public virtual string ProviderKey { get; set; }

        public virtual int Value { get; set; }

    }

    public partial class SerialNumberCreateDto
    {
        public virtual string ProviderName { get; set; }

        public virtual string ProviderKey { get; set; }

        public virtual int Value { get; set; }

    }

    public partial class SerialNumberUpdateDto
    {
        public virtual string ProviderName { get; set; }

        public virtual string ProviderKey { get; set; }

        public virtual int Value { get; set; }

    }

    public partial class SerialNumberGetListDto : PagedAndSortedResultRequestDto
    {
    }

    public partial class SerialNumberWithDetailsDto : SerialNumberDto
    {
    }
}
