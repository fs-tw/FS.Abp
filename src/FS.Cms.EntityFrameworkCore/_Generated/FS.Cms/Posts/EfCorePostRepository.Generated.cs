﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 2.0.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Linq.Expressions;

namespace FS.Cms.Posts
{
    public partial class EfCorePostRepository : 
        EfCoreRepository<FS.Cms.EntityFrameworkCore.ICmsDbContext,FS.Cms.Posts.Post,Guid>,
        IPostRepository
    {
        public EfCorePostRepository(IDbContextProvider<FS.Cms.EntityFrameworkCore.ICmsDbContext> dbContextProvider)
            : base(dbContextProvider) { }
        public override IQueryable<FS.Cms.Posts.Post> WithDetails()
        {
            return GetQueryable().IncludeDetails();
        }
    }
}
