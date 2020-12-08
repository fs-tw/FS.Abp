using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Data;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Editions;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Tenants;

namespace Volo.Saas.Host
{
    [Authorize(SaasHostPermissions.Tenants.Default)]
    public class TenantAppService : SaasHostAppServiceBase, ITenantAppService
    {
        protected IEditionRepository EditionRepository { get; }
        protected IDataSeeder DataSeeder { get; }
        protected ITenantRepository TenantRepository { get; }
        protected ITenantManager TenantManager { get; }

        public TenantAppService(
            ITenantRepository tenantRepository,
            IEditionRepository editionRepository,
            ITenantManager tenantManager,
            IDataSeeder dataSeeder)
        {
            EditionRepository = editionRepository;
            DataSeeder = dataSeeder;
            TenantRepository = tenantRepository;
            TenantManager = tenantManager;
        }

        public virtual async Task<SaasTenantDto> GetAsync(Guid id)
        {
            var tenant = ObjectMapper.Map<Tenant, SaasTenantDto>(
                await TenantRepository.GetAsync(id)
            );

            if (tenant.EditionId.HasValue)
            {
                var edition = await EditionRepository.GetAsync(tenant.EditionId.Value);
                tenant.EditionName = edition.DisplayName;
            }

            return tenant;
        }

        public virtual async Task<PagedResultDto<SaasTenantDto>> GetListAsync(GetTenantsInput input)
        {
            var count = await TenantRepository.GetCountAsync(input.Filter);
            var list = await TenantRepository.GetListAsync(
                input.Sorting,
                input.MaxResultCount,
                input.SkipCount,
                input.Filter
            );

            var tenantDtos = ObjectMapper.Map<List<Tenant>, List<SaasTenantDto>>(list);

            if (input.GetEditionNames)
            {
                var editions = await EditionRepository.GetListAsync();
                foreach (var tenant in tenantDtos)
                {
                    var edition = editions.FirstOrDefault(e=>e.Id == tenant.EditionId);
                    tenant.EditionName = edition?.DisplayName;
                }
            }

            return new PagedResultDto<SaasTenantDto>(
                count,
                tenantDtos
            );
        }

        [Authorize(SaasHostPermissions.Tenants.Create)]
        public virtual async Task<SaasTenantDto> CreateAsync(SaasTenantCreateDto input)
        {
            var tenant = await TenantManager.CreateAsync(input.Name, input.EditionId);
            input.MapExtraPropertiesTo(tenant);
            await TenantRepository.InsertAsync(tenant);

            await CurrentUnitOfWork.SaveChangesAsync();

            using (CurrentTenant.Change(tenant.Id, tenant.Name))
            {
                //TODO: Handle database creation?

                await DataSeeder.SeedAsync(
                    new DataSeedContext(tenant.Id)
                        .WithProperty("AdminEmail", input.AdminEmailAddress)
                        .WithProperty("AdminPassword", input.AdminPassword)
                );
            }

            return ObjectMapper.Map<Tenant, SaasTenantDto>(tenant);
        }

        [Authorize(SaasHostPermissions.Tenants.Update)]
        public virtual async Task<SaasTenantDto> UpdateAsync(Guid id, SaasTenantUpdateDto input)
        {
            var tenant = await TenantRepository.GetAsync(id);

            tenant.EditionId = input.EditionId;
            await TenantManager.ChangeNameAsync(tenant, input.Name);
            input.MapExtraPropertiesTo(tenant);
            await TenantRepository.UpdateAsync(tenant);

            return ObjectMapper.Map<Tenant, SaasTenantDto>(tenant);
        }

        [Authorize(SaasHostPermissions.Tenants.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            var tenant = await TenantRepository.FindAsync(id);
            if (tenant == null)
            {
                return;
            }

            await TenantRepository.DeleteAsync(tenant);
        }

        [Authorize(SaasHostPermissions.Tenants.ManageConnectionStrings)]
        public virtual async Task<string> GetDefaultConnectionStringAsync(Guid id)
        {
            var tenant = await TenantRepository.GetAsync(id);
            return tenant?.FindDefaultConnectionString();
        }

        [Authorize(SaasHostPermissions.Tenants.ManageConnectionStrings)]
        public virtual async Task UpdateDefaultConnectionStringAsync(Guid id, string defaultConnectionString)
        {
            var tenant = await TenantRepository.GetAsync(id);
            tenant.SetDefaultConnectionString(defaultConnectionString);
            await TenantRepository.UpdateAsync(tenant);
        }

        [Authorize(SaasHostPermissions.Tenants.ManageConnectionStrings)]
        public virtual async Task DeleteDefaultConnectionStringAsync(Guid id)
        {
            var tenant = await TenantRepository.GetAsync(id);
            tenant.RemoveDefaultConnectionString();
            await TenantRepository.UpdateAsync(tenant);
        }
    }
}
