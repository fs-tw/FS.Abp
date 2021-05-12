using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.BlobStoring;
using Volo.CmsKit.Admin.MediaDescriptors;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement.Samples
{
    public class SampleAppService : CmsKitManagementAppService, ISampleAppService
    {
        public Task<SampleDto> GetAsync()
        {
            return Task.FromResult(
                new SampleDto
                {
                    Value = 42
                }
            );
        }

        [Authorize]
        public Task<SampleDto> GetAuthorizedAsync()
        {
            return Task.FromResult(
                new SampleDto
                {
                    Value = 42
                }
            );
        }
    }
}