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

namespace FS.Theme.Routes
{
    public partial class EfCoreMyRouteDefinitionRepository : 
        EfCoreRepository<FS.Theme.EntityFrameworkCore.IThemeDbContext,FS.Theme.Routes.MyRouteDefinition>,
        IMyRouteDefinitionRepository
    {
        public EfCoreMyRouteDefinitionRepository(IDbContextProvider<FS.Theme.EntityFrameworkCore.IThemeDbContext> dbContextProvider)
            : base(dbContextProvider) { }
    }
}