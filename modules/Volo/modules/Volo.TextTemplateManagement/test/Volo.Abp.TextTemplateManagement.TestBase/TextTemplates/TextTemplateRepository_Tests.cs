using System;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public abstract class TextTemplateRepository_Tests<TStartupModule> : TextTemplateManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ITextTemplateContentRepository _textTemplateContentRepository;
        private readonly TextManagementTestData _testData;

        protected TextTemplateRepository_Tests()
        {
            _testData = GetRequiredService<TextManagementTestData>();
            _textTemplateContentRepository = GetRequiredService<ITextTemplateContentRepository>();
        }
        
        [Theory]
        [InlineData("Text Template 4", null)]
        [InlineData("Text Template 1", "tr")]
        public async Task Get_Async(string name, string cultureName = null)
        {
            var textTemplate = await _textTemplateContentRepository.GetAsync(name, cultureName);

            textTemplate.ShouldNotBeNull();
        }

        [Theory]
        [InlineData("Text Template 4", null)]
        [InlineData("Text Template 1", "tr")]
        public async Task Find_Async(string name, string cultureName = null)
        {
            var textTemplate = await _textTemplateContentRepository.FindAsync(name, cultureName);

            textTemplate.ShouldNotBeNull();
        }

        [Fact]
        public async Task Should_Find_Null()
        {
            var templateContent = await _textTemplateContentRepository.FindAsync("not-exist-content", "es");

            templateContent.ShouldBeNull();
        }

        [Fact]
        public async Task Insert_New_Async()
        {
            await _textTemplateContentRepository.InsertAsync(
                new TextTemplateContent(Guid.NewGuid(), "New", "-*NewContent*-", "gr"));

            (await _textTemplateContentRepository.GetListAsync()).Count.ShouldBe(TextManagementTestData.TotalTemplateContentCount + 1);
        }
    }
}
