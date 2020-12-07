using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.MongoDB
{
    [ConnectionStringName(TextTemplateManagementDbProperties.ConnectionStringName)]
    public class TextTemplateManagementMongoDbContext : AbpMongoDbContext, ITextTemplateManagementMongoDbContext
    {
        public IMongoCollection<TextTemplateContent> TextTemplates => Collection<TextTemplateContent>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureTextTemplateManagement();
        }

    }
}