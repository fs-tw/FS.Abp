﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 4.2.2
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

namespace FS.FormManagement.Forms
{
    public partial class EfCoreCheckboxRepository : 
        EfCoreRepository<FS.FormManagement.EntityFrameworkCore.IFormManagementDbContext,FS.FormManagement.Forms.Checkbox,Guid>,
        ICheckboxRepository
    {
        public EfCoreCheckboxRepository(IDbContextProvider<FS.FormManagement.EntityFrameworkCore.IFormManagementDbContext> dbContextProvider)
            : base(dbContextProvider) { }
        public override async Task<IQueryable<FS.FormManagement.Forms.Checkbox>> WithDetailsAsync()
        {
            return (await GetQueryableAsync()).IncludeDetails();
        }
    }
}
