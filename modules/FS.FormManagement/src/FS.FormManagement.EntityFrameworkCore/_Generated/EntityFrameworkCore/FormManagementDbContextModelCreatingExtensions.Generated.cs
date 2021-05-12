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
    public static partial class FormManagementDbContextModelCreatingExtensions
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

            CustomizeMapping(ref builder);

            builder.ApplyConfiguration<FS.FormManagement.Groups.Group>(new FS.FormManagement.Groups.GroupConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Groups.GroupQuestion>(new FS.FormManagement.Groups.GroupQuestionConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Versions.Version>(new FS.FormManagement.Versions.VersionConfiguration(options));
            builder.ApplyConfiguration<FS.FormManagement.Versions.VersionDefinition>(new FS.FormManagement.Versions.VersionDefinitionConfiguration(options));
        }
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder);
    }
}