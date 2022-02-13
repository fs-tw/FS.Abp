﻿using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Entity.EntityFeatures.Samples;

public interface ISampleAppService : IApplicationService
{
    Task<SampleDto> GetAsync();

    Task<SampleDto> GetAuthorizedAsync();
}
