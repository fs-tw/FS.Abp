
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.SerialNumbers
{
    public interface ISerialNumbersManager : IDomainService
    {
        Task<SerialNumber> GenerateAsync(string providerName,string providerKey);
    }
}
