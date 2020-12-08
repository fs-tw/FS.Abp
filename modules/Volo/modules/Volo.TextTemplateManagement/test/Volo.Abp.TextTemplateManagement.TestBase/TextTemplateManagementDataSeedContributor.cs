using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement
{
    public class TextTemplateManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly TextManagementTestData _testData;
        private readonly ITextTemplateContentRepository _textTemplateContentRepository;

        public TextTemplateManagementDataSeedContributor(
            TextManagementTestData testData, 
            ITextTemplateContentRepository textTemplateContentRepository)
        {
            _testData = testData;
            _textTemplateContentRepository = textTemplateContentRepository;
        }
        
        public async Task SeedAsync(DataSeedContext context)
        {
            await _textTemplateContentRepository.InsertAsync(_testData.TextTemplateContent1);
            await _textTemplateContentRepository.InsertAsync(_testData.TextTemplateContent2);
            await _textTemplateContentRepository.InsertAsync(_testData.TextTemplateContent3);
            await _textTemplateContentRepository.InsertAsync(_testData.TextTemplateContent4);
        }
    }
}