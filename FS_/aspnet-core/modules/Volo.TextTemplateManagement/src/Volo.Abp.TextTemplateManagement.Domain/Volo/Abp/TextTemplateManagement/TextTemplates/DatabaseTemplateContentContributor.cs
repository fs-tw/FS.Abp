using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class DatabaseTemplateContentContributor : ITemplateContentContributor, ITransientDependency
    {
        private readonly ITextTemplateContentRepository _contentRepository;

        public DatabaseTemplateContentContributor(ITextTemplateContentRepository contentRepository)
        {
            _contentRepository = contentRepository;
        }

        public async Task<string> GetOrNullAsync(TemplateContentContributorContext context)
        {
            var template = await _contentRepository.FindAsync(
                context.TemplateDefinition.Name,
                context.Culture
            );

            return template?.Content;
        }
    }
}