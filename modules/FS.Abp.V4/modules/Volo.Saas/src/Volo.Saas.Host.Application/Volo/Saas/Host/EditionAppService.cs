using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Saas.Host.Dtos;
using System.Linq;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.Host
{
    [Authorize(SaasHostPermissions.Editions.Default)]
    public class EditionAppService : SaasHostAppServiceBase, IEditionAppService
    {
        protected IEditionRepository EditionRepository { get; }
        protected ITenantRepository TenantRepository { get; }

        public EditionAppService(IEditionRepository editionRepository, ITenantRepository tenantRepository)
        {
            EditionRepository = editionRepository;
            TenantRepository = tenantRepository;
        }

        public virtual async Task<EditionDto> GetAsync(Guid id)
        {
            var edition = await EditionRepository.GetAsync(id);

            return ObjectMapper.Map<Edition, EditionDto>(edition);
        }

        public virtual async Task<PagedResultDto<EditionDto>> GetListAsync(GetEditionsInput input)
        {
            var count = await EditionRepository.GetCountAsync(input.Filter);
            var editions = await EditionRepository.GetListAsync(input.Sorting, input.MaxResultCount, input.SkipCount, input.Filter);

            return new PagedResultDto<EditionDto>(
                count,
                ObjectMapper.Map<List<Edition>, List<EditionDto>>(editions)
            );
        }

        [Authorize(SaasHostPermissions.Editions.Create)]
        public virtual async Task<EditionDto> CreateAsync(EditionCreateDto input)
        {
            var edition = new Edition(GuidGenerator.Create(), input.DisplayName);
            input.MapExtraPropertiesTo(edition);

            await EditionRepository.InsertAsync(edition);

            return ObjectMapper.Map<Edition, EditionDto>(edition);
        }

        [Authorize(SaasHostPermissions.Editions.Update)]
        public virtual async Task<EditionDto> UpdateAsync(Guid id, EditionUpdateDto input)
        {
            var edition = await EditionRepository.GetAsync(id);

            edition.SetDisplayName(input.DisplayName);
            input.MapExtraPropertiesTo(edition);

            var updatedEdition = await EditionRepository.UpdateAsync(edition);

            return ObjectMapper.Map<Edition, EditionDto>(updatedEdition);
        }

        [Authorize(SaasHostPermissions.Editions.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await EditionRepository.DeleteAsync(id);
        }

        public virtual async Task<GetEditionUsageStatisticsResult> GetUsageStatistics()
        {
            var editions = await EditionRepository.GetListAsync();
            var tenants = await TenantRepository.GetListAsync();

            var result = tenants.GroupBy(info => info.EditionId)
                .Select(group => new
                {
                    EditionId = group.Key,
                    Count = group.Count()
                });

            var data = new Dictionary<string, int>();

            foreach (var element in result)
            {
                var displayName = editions.FirstOrDefault(e => e.Id == element.EditionId)?.DisplayName;

                if (displayName != null)
                {
                    data.Add(displayName, element.Count);
                }
            }

            return new GetEditionUsageStatisticsResult()
            {
                Data = data
            };
        }
    }
}
