﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
namespace FS.FormManagement.EntityFrameworkCore
{
    public static class FormManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureFormManagement(
            this ModelBuilder builder,
            Action<FormManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FormManagementModelBuilderConfigurationOptions(
                FormManagementDbProperties.DbTablePrefix,
                FormManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.ApplyConfiguration<FS.FormManagement.Forms.Formal>(new FS.FormManagement.Forms.FormalConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Forms.Group>(new FS.FormManagement.Forms.GroupConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Forms.Item>(new FS.FormManagement.Forms.ItemConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Versions.Version>(new FS.FormManagement.Versions.VersionConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Records.Record>(new FS.FormManagement.Records.RecordConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Records.RecordItem>(new FS.FormManagement.Records.RecordItemConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Versions.VersionDefinition>(new FS.FormManagement.Versions.VersionDefinitionConfiguration(options));
        }
    }
}
