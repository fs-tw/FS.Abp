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

namespace FS.Cms.Core.Dtos
{
    public partial class CmsImageFieldDto
    {
        public string Title { get; set; }

        public string Url { get; set; }

        public decimal Width { get; set; }

        public decimal Height { get; set; }

        public bool IsCover { get; set; }

    }
    public partial class CmsImageFieldWithDetailsDto : CmsImageFieldDto
    {
    }
}
