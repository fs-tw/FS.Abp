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
using Volo.Abp.Domain.Services;

namespace FS.Cms.Blogs
{
    public partial interface IBlogsStore : IDomainService //auto-generated
    {
        IBlogTreeRepository Blog { get; }
    }
    public partial class BlogsStore : DomainService, IBlogsStore //auto-generated
    {
        public IBlogTreeRepository Blog => this.LazyServiceProvider.LazyGetRequiredService<IBlogTreeRepository>();
    }
}
