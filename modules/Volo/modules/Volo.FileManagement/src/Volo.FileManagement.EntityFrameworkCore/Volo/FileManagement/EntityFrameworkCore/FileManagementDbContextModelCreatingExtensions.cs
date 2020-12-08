using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.EntityFrameworkCore
{
    public static class FileManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureFileManagement(
            this ModelBuilder builder,
            Action<FileManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FileManagementModelBuilderConfigurationOptions(
                FileManagementDbProperties.DbTablePrefix,
                FileManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Entity<DirectoryDescriptor>(b =>
            {
                b.ToTable(options.TablePrefix + "DirectoryDescriptors", options.Schema);
                
                b.ConfigureByConvention();

                b.Property(p => p.Name).IsRequired().HasMaxLength(DirectoryDescriptorConsts.MaxNameLength);

                b.HasMany<DirectoryDescriptor>().WithOne().HasForeignKey(p => p.ParentId);
                b.HasOne<DirectoryDescriptor>().WithMany().HasForeignKey(p => p.ParentId);

                b.HasMany<FileDescriptor>().WithOne().HasForeignKey(p => p.DirectoryId);
                
                b.HasIndex(x => new {x.TenantId, x.ParentId, x.Name});
            });

            builder.Entity<FileDescriptor>(b =>
            {
                b.ToTable(options.TablePrefix + "FileDescriptors", options.Schema);
                
                b.ConfigureByConvention();

                b.Property(p => p.Name).IsRequired().HasMaxLength(FileDescriptorConsts.MaxNameLength);
                b.Property(p => p.MimeType).IsRequired().HasMaxLength(FileDescriptorConsts.MaxMimeTypeLength);
                b.Property(p => p.Size).IsRequired().HasMaxLength(FileDescriptorConsts.MaxSizeLength);

                b.HasOne<DirectoryDescriptor>().WithMany().HasForeignKey(p => p.DirectoryId);
                
                b.HasIndex(x => new {x.TenantId, x.DirectoryId, x.Name});
            });
        }
    }
}