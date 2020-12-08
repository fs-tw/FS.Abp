using JetBrains.Annotations;
using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public interface ITextTemplateContentRepository : IBasicRepository<TextTemplateContent, Guid>
    {
        Task<TextTemplateContent> GetAsync([NotNull]string name, [CanBeNull]string cultureName = null);

        Task<TextTemplateContent> FindAsync([NotNull]string name, [CanBeNull]string cultureName = null);
    }
}