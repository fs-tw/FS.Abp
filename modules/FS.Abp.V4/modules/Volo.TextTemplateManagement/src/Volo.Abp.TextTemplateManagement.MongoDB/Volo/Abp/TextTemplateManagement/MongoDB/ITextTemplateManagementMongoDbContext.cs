using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.MongoDB
{
    [ConnectionStringName(TextTemplateManagementDbProperties.ConnectionStringName)]
    public interface ITextTemplateManagementMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<TextTemplateContent> TextTemplates { get; }
    }
}
