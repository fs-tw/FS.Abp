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

namespace FS.Theme.Routes.Dtos
{
    public partial class MetaData
    {
        public RouteConfigDto RouteConfigDto => new RouteConfigDto();
    }

    public partial class RouteConfigDto
    {
        public virtual string Icon { get; set; }

        public virtual string Url { get; set; }

        public virtual int Sequence { get; set; }

        public virtual bool OpenAnotherWindow { get; set; }

    }
}
