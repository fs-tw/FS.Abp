using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [ConnectionStringName(LanguageManagementDbProperties.ConnectionStringName)]
    public class LanguageManagementMongoDbContext : AbpMongoDbContext, ILanguageManagementMongoDbContext
    {
        public static string CollectionPrefix { get; set; } = LanguageManagementDbProperties.DbTablePrefix;

        public IMongoCollection<Language> Languages => Collection<Language>();

        public IMongoCollection<LanguageText> LanguageTexts => Collection<LanguageText>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureLanguageManagement(options =>
            {
                options.CollectionPrefix = CollectionPrefix;
            });
        }
    }
}