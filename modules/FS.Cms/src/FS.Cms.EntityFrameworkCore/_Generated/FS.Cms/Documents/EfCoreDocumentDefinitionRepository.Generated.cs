﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 4.2.1
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

namespace FS.Cms.Documents
{
    public partial class EfCoreDocumentDefinitionRepository : 
        EfCoreRepository<FS.Cms.EntityFrameworkCore.ICmsDbContext,FS.Cms.Documents.DocumentDefinition,String>,
        IDocumentDefinitionRepository
    {
        public EfCoreDocumentDefinitionRepository(IDbContextProvider<FS.Cms.EntityFrameworkCore.ICmsDbContext> dbContextProvider)
            : base(dbContextProvider) { }
        public override async Task<IQueryable<FS.Cms.Documents.DocumentDefinition>> WithDetailsAsync()
        {
            return (await GetQueryableAsync()).IncludeDetails();
        }
    }
}