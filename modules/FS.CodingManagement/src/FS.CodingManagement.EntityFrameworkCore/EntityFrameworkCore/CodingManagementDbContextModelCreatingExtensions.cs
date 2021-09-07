//using System;
//using Microsoft.EntityFrameworkCore;
//using Volo.Abp;

//namespace FS.CodingManagement.EntityFrameworkCore
//{
//    public static class CodingManagementDbContextModelCreatingExtensions
//    {
//        public static void ConfigureCodingManagement(
//            this ModelBuilder builder,
//            Action<CodingManagementModelBuilderConfigurationOptions> optionsAction = null)
//        {
//            Check.NotNull(builder, nameof(builder));

//            var options = new CodingManagementModelBuilderConfigurationOptions(
//                CodingManagementDbProperties.DbTablePrefix,
//                CodingManagementDbProperties.DbSchema
//            );

//            optionsAction?.Invoke(options);

//            /* Configure all entities here. Example:

//            builder.Entity<Question>(b =>
//            {
//                //Configure table & schema name
//                b.ToTable(options.TablePrefix + "Questions", options.Schema);
            
//                b.ConfigureByConvention();
            
//                //Properties
//                b.Property(q => q.Title).IsRequired().HasMaxLength(QuestionConsts.MaxTitleLength);
                
//                //Relations
//                b.HasMany(question => question.Tags).WithOne().HasForeignKey(qt => qt.QuestionId);

//                //Indexes
//                b.HasIndex(q => q.CreationTime);
//            });
//            */
//        }
//    }
//}