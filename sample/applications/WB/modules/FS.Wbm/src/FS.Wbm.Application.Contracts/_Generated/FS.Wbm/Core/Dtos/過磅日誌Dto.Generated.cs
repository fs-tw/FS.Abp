﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.Wbm.Core.Dtos
{
    public partial class MetaData
    {
        public 過磅日誌PrimaryKeyDto 過磅日誌PrimaryKeyDto => new 過磅日誌PrimaryKeyDto();
        public 過磅日誌Dto 過磅日誌Dto => new 過磅日誌Dto();
        public 過磅日誌CreateDto 過磅日誌CreateDto => new 過磅日誌CreateDto();
        public 過磅日誌UpdateDto 過磅日誌UpdateDto => new 過磅日誌UpdateDto();
        public 過磅日誌GetListDto 過磅日誌GetListDto => new 過磅日誌GetListDto();
        public 過磅日誌WithDetailsDto 過磅日誌WithDetailsDto => new 過磅日誌WithDetailsDto();
    }

    public partial class 過磅日誌PrimaryKeyDto : EntityDto<Int64>
    {
    }

    public partial class 過磅日誌Dto : Volo.Abp.Application.Dtos.EntityDto<Int64>
    {
        public virtual System.DateTime 日期 { get; set; }

        public virtual System.DateTime 時間 { get; set; }

        public virtual string 內容 { get; set; }

        public virtual string 操作者 { get; set; }

    }

    public partial class 過磅日誌CreateDto
    {
        public virtual System.DateTime 日期 { get; set; }

        public virtual System.DateTime 時間 { get; set; }

        public virtual string 內容 { get; set; }

        public virtual string 操作者 { get; set; }

    }

    public partial class 過磅日誌UpdateDto
    {
        public virtual System.DateTime 日期 { get; set; }

        public virtual System.DateTime 時間 { get; set; }

        public virtual string 內容 { get; set; }

        public virtual string 操作者 { get; set; }

    }

    public partial class 過磅日誌GetListDto : SearchResultRequestDto
    {
    }

    public partial class 過磅日誌WithDetailsDto : 過磅日誌Dto
    {
    }
}
