using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FS.Coding.SerialNumbers
{
    public partial interface ISerialNumberRepository : 
        Volo.Abp.Domain.Repositories.IRepository<FS.Coding.SerialNumbers.SerialNumber,Guid>
    {
        Task<SerialNumber> LookupAsync(string providerName, string providerKey = null);
        Task<SerialNumber> LookupAsync(Expression<Func<SerialNumber, bool>> predicate);
        Task<SerialNumber> GenerateAsync(string providerName, string providerKey = null);
    }
}
