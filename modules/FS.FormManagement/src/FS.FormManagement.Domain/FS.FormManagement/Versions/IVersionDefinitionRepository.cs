﻿//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 4.2.2
//
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.FormManagement.Versions
{
    public partial interface IVersionDefinitionRepository
    {
        Task<VersionDefinition> FindAsync<TEntity>(string entityKey = null)
            where TEntity : IVersion;
        Task<VersionDefinition> FindOrInsertAsync<TEntity>(
            string entityKey = null,
            Action<VersionDefinition> action = null)
            where TEntity : IVersion;
    }
}