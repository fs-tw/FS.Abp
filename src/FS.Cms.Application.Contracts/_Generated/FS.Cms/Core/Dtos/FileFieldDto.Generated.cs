﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
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
    public partial class FileFieldDto
    {
        public string Title { get; set; }

        public string Url { get; set; }

        public string Size { get; set; }

        public FS.Cms.Core.FileType FileType { get; set; }

    }
    public partial class FileFieldWithDetailsDto : FileFieldDto
    {
    }
    public partial class FileFieldCreateInput
    {
        public string Title { get; set; }

        public string Url { get; set; }

        public string Size { get; set; }

        public FS.Cms.Core.FileType FileType { get; set; }

    }
    public partial class FileFieldUpdateInput
    {
        public string Title { get; set; }

        public string Url { get; set; }

        public string Size { get; set; }

        public FS.Cms.Core.FileType FileType { get; set; }

    }
    public partial class FileFieldGetListInput : SearchResultRequestDto
    {
    }
}
