using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    public static class AuthenticationDbContextModelCreatingExtensions
    {
        public static void ConfigureAuthentication(
            this ModelBuilder builder,
            Action<AuthenticationModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new AuthenticationModelBuilderConfigurationOptions(
                AuthenticationDbProperties.DbTablePrefix,
                AuthenticationDbProperties.DbSchema
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