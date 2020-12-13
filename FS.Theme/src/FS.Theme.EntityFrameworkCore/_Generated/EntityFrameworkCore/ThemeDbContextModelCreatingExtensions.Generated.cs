﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
namespace FS.Theme.EntityFrameworkCore
{
    public static class ThemeDbContextModelCreatingExtensions
    {
        public static void ConfigureTheme(
            this ModelBuilder builder,
            Action<ThemeModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new ThemeModelBuilderConfigurationOptions(
                ThemeDbProperties.DbTablePrefix,
                ThemeDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Ignore<FS.Theme.Banners.BannerConfig>();
            builder.Ignore<FS.Theme.Routes.RouteConfig>();
            builder.ApplyConfiguration<FS.Theme.Routes.RouteDefinition>(new FS.Theme.Routes.RouteDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.Theme.Routes.Route>(new FS.Theme.Routes.RouteConfiguration(options));
            builder.ApplyConfiguration<FS.Theme.Banners.BannerDefinition>(new FS.Theme.Banners.BannerDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.Theme.Banners.Banner>(new FS.Theme.Banners.BannerConfiguration(options));
        }
    }
}
