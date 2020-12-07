using System;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.EntityFrameworkCore
{
    public static class SaasDbContextModelCreatingExtensions
    {
        public static void ConfigureSaas(
            this ModelBuilder builder,
            [CanBeNull] Action<SaasModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new SaasModelBuilderConfigurationOptions(
                SaasDbProperties.DbTablePrefix,
                SaasDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Entity<Tenant>(b =>
            {
                b.ToTable(options.TablePrefix + "Tenants", options.Schema);

                b.ConfigureByConvention();

                b.Property(x => x.Name).IsRequired().HasMaxLength(TenantConsts.MaxNameLength).HasColumnName(nameof(Tenant.Name));

                b.HasMany(x => x.ConnectionStrings).WithOne().HasForeignKey(uc => uc.TenantId).IsRequired();

                b.HasIndex(x => x.Name);
            });

            builder.Entity<Edition>(b =>
            {
                b.ToTable(options.TablePrefix + "Editions", options.Schema);

                b.ConfigureByConvention();

                b.Property(x => x.DisplayName).IsRequired().HasMaxLength(EditionConsts.MaxDisplayNameLength).HasColumnName(nameof(Edition.DisplayName));

                b.HasIndex(x => x.DisplayName);
            });

            builder.Entity<TenantConnectionString>(b =>
            {
                b.ToTable(options.TablePrefix + "TenantConnectionStrings", options.Schema);

                b.ConfigureByConvention();

                b.HasKey(x => new { x.TenantId, x.Name });

                b.Property(x => x.Name).IsRequired().HasMaxLength(TenantConnectionStringConsts.MaxNameLength).HasColumnName(nameof(TenantConnectionString.Name));
                b.Property(x => x.Value).IsRequired().HasMaxLength(TenantConnectionStringConsts.MaxValueLength).HasColumnName(nameof(TenantConnectionString.Value));
            });
        }
    }
}