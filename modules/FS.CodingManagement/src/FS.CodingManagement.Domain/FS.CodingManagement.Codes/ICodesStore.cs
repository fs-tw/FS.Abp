using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.Codes
{
    public partial interface ICodesStore : IDomainService 
    {
        Task<T> GetCodeValueAsync<T>(string codeNo);
        Task SetCodeValueAsync<T>(string codeNo, T value);
    }
}
