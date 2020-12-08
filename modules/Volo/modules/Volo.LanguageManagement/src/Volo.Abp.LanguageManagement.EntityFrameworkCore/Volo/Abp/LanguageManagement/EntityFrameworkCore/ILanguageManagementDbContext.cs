using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace Volo.Abp.LanguageManagement.EntityFrameworkCore
{
    [ConnectionStringName(LanguageManagementDbProperties.ConnectionStringName)]
    public interface ILanguageManagementDbContext : IEfCoreDbContext
    {
        DbSet<Language> Languages { get; set; }

        DbSet<LanguageText> LanguageTexts { get; set; }
    }
}