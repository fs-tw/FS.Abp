
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.Coding.SerialNumbers
{
    public interface ISerialNumbersManager : IDomainService
    {
        Task<string> GenerateAsync(string providerName,string providerKey);
    }
}
