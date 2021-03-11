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
namespace FS.EntityFrameworkCore
{
    public static class FSDbContextModelCreatingExtensions
    {
        public static void ConfigureFS(
            this ModelBuilder builder,
            Action<FSModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FSModelBuilderConfigurationOptions(
                FSDbProperties.DbTablePrefix,
                FSDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.ApplyConfiguration<FS.Customers.Enterprise>(new FS.Customers.EnterpriseConfiguration(options));
            builder.ApplyConfiguration<FS.Customers.Person>(new FS.Customers.PersonConfiguration(options));
            builder.ApplyConfiguration<FS.Customers.Customer>(new FS.Customers.CustomerConfiguration(options));
        }
    }
}
