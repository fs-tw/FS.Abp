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
using Volo.Abp.Domain.Services;

namespace FS.Cms.Tags
{
    public partial interface ITagsStore : IDomainService //auto-generated
    {
        ITagTreeRepository Tag { get; }
    }
    public partial class TagsStore : DomainService //auto-generated
    {
        private ITagTreeRepository _Tag;
        public ITagTreeRepository Tag => this.LazyGetRequiredService(ref _Tag);
    }
}
