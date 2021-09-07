
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.Codes
{
    public partial interface ICodesStore : IDomainService
    {
        Task<Coding> GenerateAsync(string providerName);
    }
}
