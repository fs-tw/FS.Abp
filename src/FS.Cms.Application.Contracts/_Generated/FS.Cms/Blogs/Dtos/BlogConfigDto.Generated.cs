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

namespace FS.Cms.Blogs.Dtos
{
    public partial class MetaData
    {
        public BlogConfigDto BlogConfigDto => new BlogConfigDto();
    }

    public partial class BlogConfigDto
    {
        public virtual string ListStyle { get; set; }

        public virtual int Sequence { get; set; }

        public virtual string Url { get; set; }

        public virtual string IconUrl { get; set; }

    }
}
