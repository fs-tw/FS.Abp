﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Services;

namespace FS.Cms.Posts
{
    public partial interface IPostsStore : IDomainService //auto-generated
    {
        IPostRepository Post { get; }
        IPostTagMapRepository PostTagMap { get; }
    }
    public partial class PostsStore : DomainService, IPostsStore //auto-generated
    {
        public IPostRepository Post => this.LazyServiceProvider.LazyGetRequiredService<IPostRepository>();
        public IPostTagMapRepository PostTagMap => this.LazyServiceProvider.LazyGetRequiredService<IPostTagMapRepository>();
    }
}
