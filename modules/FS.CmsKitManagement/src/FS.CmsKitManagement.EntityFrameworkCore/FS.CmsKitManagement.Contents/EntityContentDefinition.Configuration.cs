using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using FS.CmsKitManagement.EntityFrameworkCore;

namespace FS.CmsKitManagement.Contents
{
    public partial class EntityContentDefinitionConfiguration : IEntityTypeConfiguration<EntityContentDefinition>
    {
    }
    public static partial class EntityContentDefinitionQueryableExtensions
    {
        static partial void CustomizeIncludeDetails(ref IQueryable<EntityContentDefinition> query)
        {
            query = query.Include(x => x.ContentDefinition.ContentProperties);
        }
    }
}
