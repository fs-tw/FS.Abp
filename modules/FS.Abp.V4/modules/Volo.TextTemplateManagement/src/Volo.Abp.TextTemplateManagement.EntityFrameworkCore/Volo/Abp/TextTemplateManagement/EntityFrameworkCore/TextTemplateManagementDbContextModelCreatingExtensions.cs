using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    public static class TextTemplateManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureTextTemplateManagement(
            this ModelBuilder builder,
            Action<TextTemplateManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new TextTemplateManagementModelBuilderConfigurationOptions(
                TextTemplateManagementDbProperties.DbTablePrefix,
                TextTemplateManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Entity<TextTemplateContent>(b =>
            {
                b.ToTable(options.TablePrefix + "TextTemplateContents", options.Schema);

                b.ConfigureByConvention();

                b.Property(e => e.Name).IsRequired().HasMaxLength(TextTemplateConsts.MaxNameLength);
                b.Property(e => e.CultureName).HasMaxLength(TextTemplateConsts.MaxCultureNameLength);
                b.Property(e => e.Content).IsRequired().HasMaxLength(TextTemplateConsts.MaxContentLength);
            });
        }
    }
}