using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    [ConnectionStringName(TextTemplateManagementDbProperties.ConnectionStringName)]
    public interface ITextTemplateManagementDbContext : IEfCoreDbContext
    {
        DbSet<TextTemplateContent> TextTemplateContents { get; set; }
    }
}