using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace FS.Coding.SerialNumbers.EntityFrameworkCore
{
    public partial class EfCoreSerialNumberRepository
    {

        public async Task<SerialNumber> LookupAsync(string providerName, string providerKey = null)
        {
            Expression<Func<SerialNumber, bool>> criteria =
                x => x.ProviderName == providerName && x.ProviderKey == providerKey;
            return await LookupAsync(criteria);
        }

        public async Task<SerialNumber> LookupAsync(Expression<Func<SerialNumber, bool>> predicate)
        {
            var dbSet = await this.GetDbSetAsync();
            return dbSet.Local.AsQueryable().Where(predicate).SingleOrDefault() ??
                await dbSet.AsQueryable().Where(predicate).SingleOrDefaultAsync();
        }

        public async Task<SerialNumber> GenerateAsync(string providerName, string providerKey = null)
        {
            var dbContext = await this.GetDbContextAsync();
            var data = await this.LookupAsync(providerName, providerKey);
            if (data == null)
            {
                data = new SerialNumber(this.GuidGenerator.Create())
                {
                    Value = 1,
                    ProviderName = providerName,
                    ProviderKey = providerKey
                };
                await this.InsertAsync(data);
            }
            else
            {
                data.Value++;
                if (dbContext.Entry(data).State == EntityState.Modified)
                {
                    await this.UpdateAsync(data);
                }
            }



            return data;



        }
    }
}
