using System;
using System.Collections.Generic;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    public class MongoLanguageTextRepository : MongoDbRepository<ILanguageManagementMongoDbContext, LanguageText, Guid>, ILanguageTextRepository
    {
        public MongoLanguageTextRepository(IMongoDbContextProvider<ILanguageManagementMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public virtual List<LanguageText> GetList(string resourceName, string cultureName)
        {
            return GetMongoQueryable().
                Where(l => l.ResourceName == resourceName && l.CultureName == cultureName)
                .ToList();
        }
    }
}