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
using Volo.Abp.Domain.Services;

namespace FS.Cms.Posts
{
    public partial interface IPostsStore : IDomainService //auto-generated
    {
        IPostRepository Post { get; }
        IPostTagMapRepository PostTagMap { get; }
    }
    public partial class PostsStore : DomainService //auto-generated
    {
        private IPostRepository _Post;
        public IPostRepository Post => this.LazyGetRequiredService(ref _Post);
        private IPostTagMapRepository _PostTagMap;
        public IPostTagMapRepository PostTagMap => this.LazyGetRequiredService(ref _PostTagMap);
    }
}
