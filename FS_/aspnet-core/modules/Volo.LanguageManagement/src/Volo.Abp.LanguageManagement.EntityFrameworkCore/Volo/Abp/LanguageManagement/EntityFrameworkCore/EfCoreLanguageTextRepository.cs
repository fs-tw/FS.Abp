using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Volo.Abp.LanguageManagement.EntityFrameworkCore
{
    public class EfCoreLanguageTextRepository : EfCoreRepository<ILanguageManagementDbContext, LanguageText, Guid>, ILanguageTextRepository
    {
        public EfCoreLanguageTextRepository(IDbContextProvider<ILanguageManagementDbContext> dbContextProvider) 
            : base(dbContextProvider)
        {
        }

        public virtual List<LanguageText> GetList(string resourceName, string cultureName)
        {
            return DbSet.
                Where(l => l.ResourceName == resourceName && l.CultureName == cultureName)
                .ToList();
        }
    }
}
