using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Abp.Authentication.Samples
{
    public interface ISampleAppService : IApplicationService
    {
        Task<SampleDto> GetAsync();

        Task<SampleDto> GetAuthorizedAsync();
    }
}
