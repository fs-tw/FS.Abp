using FS.CmsKitManagement.MultiLinguals.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial interface IMultiLingualCrudAppService
    {
        Task<MultiLingualWithDetailsDto> FindAsync(MultiLingualFindDto input);

        Task PatchAsync(MultiLingualPatchDto input);
    }
}
