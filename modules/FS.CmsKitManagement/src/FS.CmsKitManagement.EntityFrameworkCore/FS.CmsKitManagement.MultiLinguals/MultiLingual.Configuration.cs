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

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualConfiguration : IEntityTypeConfiguration<MultiLingual>
    {
        partial void CustomizeConfiguration(EntityTypeBuilder<MultiLingual> builder)
        {
            builder.HasIndex(new[] { nameof(MultiLingual.EntityType), nameof(MultiLingual.EntityId) }).IsUnique();
        }

    }

}
