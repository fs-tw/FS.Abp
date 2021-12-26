using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Abp.Metadata.Samples
{
    public interface ISampleAppService : IApplicationService
    {
        Task<SampleDto> GetAsync();

        Task<SampleDto> GetAuthorizedAsync();
    }
}
