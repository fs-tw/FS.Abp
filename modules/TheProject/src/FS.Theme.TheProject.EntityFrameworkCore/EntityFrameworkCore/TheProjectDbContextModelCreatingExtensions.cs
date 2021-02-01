using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    public static class TheProjectDbContextModelCreatingExtensions
    {
        public static void ConfigureTheProject(
            this ModelBuilder builder,
            Action<TheProjectModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new TheProjectModelBuilderConfigurationOptions(
                TheProjectDbProperties.DbTablePrefix,
                TheProjectDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            /* Configure all entities here. Example:

            builder.Entity<Question>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "Questions", options.Schema);
            
                b.ConfigureByConvention();
            
                //Properties
                b.Property(q => q.Title).IsRequired().HasMaxLength(QuestionConsts.MaxTitleLength);
                
                //Relations
                b.HasMany(question => question.Tags).WithOne().HasForeignKey(qt => qt.QuestionId);

                //Indexes
                b.HasIndex(q => q.CreationTime);
            });
            */
        }
    }
}