﻿using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Saas.EntityFrameworkCore;

namespace Volo.Chat.EntityFrameworkCore
{
    public class UnifiedDbContext : AbpDbContext<UnifiedDbContext>
    {
        public UnifiedDbContext(DbContextOptions<UnifiedDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigurePermissionManagement();
            modelBuilder.ConfigureSettingManagement();
            modelBuilder.ConfigureAuditLogging();
            modelBuilder.ConfigureIdentity();
            modelBuilder.ConfigureSaas();
            modelBuilder.ConfigureFeatureManagement();
            modelBuilder.ConfigureChat();
            modelBuilder.ConfigureBlobStoring();
        }
    }
}