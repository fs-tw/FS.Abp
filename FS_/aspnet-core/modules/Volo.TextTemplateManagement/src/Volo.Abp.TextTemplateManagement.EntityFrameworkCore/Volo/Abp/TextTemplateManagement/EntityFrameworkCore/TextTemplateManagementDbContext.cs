using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    [ConnectionStringName(TextTemplateManagementDbProperties.ConnectionStringName)]
    public class TextTemplateManagementDbContext : AbpDbContext<TextTemplateManagementDbContext>, ITextTemplateManagementDbContext
    {
        public DbSet<TextTemplateContent> TextTemplateContents { get; set; }

        public TextTemplateManagementDbContext(DbContextOptions<TextTemplateManagementDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureTextTemplateManagement();
        }
    }
}