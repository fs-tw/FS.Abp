using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host
{
    public interface IEditionAppService : ICrudAppService<EditionDto, Guid, GetEditionsInput, EditionCreateDto, EditionUpdateDto>
    {
        Task<GetEditionUsageStatisticsResult> GetUsageStatistics();
    }
}
