﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class EfCoreMultiLingualTranslationRepository : 
        EfCoreRepository<FS.CmsKitManagement.EntityFrameworkCore.ICmsKitManagementDbContext,FS.CmsKitManagement.MultiLinguals.MultiLingualTranslation,Guid>,
        IMultiLingualTranslationRepository
    {
        public EfCoreMultiLingualTranslationRepository(IDbContextProvider<FS.CmsKitManagement.EntityFrameworkCore.ICmsKitManagementDbContext> dbContextProvider)
            : base(dbContextProvider) { }
        public override async Task<IQueryable<FS.CmsKitManagement.MultiLinguals.MultiLingualTranslation>> WithDetailsAsync()
        {
            return (await GetQueryableAsync()).IncludeDetails();
        }
    }
}
