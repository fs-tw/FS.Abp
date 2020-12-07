using System;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.TextTemplating;
using Xunit;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class DatabaseTextTemplateContentContributor_Tests : TextTemplateManagementDomainTestBase
    {
        private readonly ITemplateContentProvider _contentProvider;
        private readonly ITextTemplateContentRepository _contentRepository;

        public DatabaseTextTemplateContentContributor_Tests()
        {
            _contentProvider = GetRequiredService<ITemplateContentProvider>();
            _contentRepository = GetRequiredService<ITextTemplateContentRepository>();
        }

        [Fact]
        public async Task Should_Get_Content()
        {
            var content = await _contentProvider.GetContentOrNullAsync("ForgotPasswordEmail");
            
            content.ShouldBe("TEST-Please click to the following link to get an email to reset your password!");
        }

        [Fact]
        public async Task Should_Get_New_Cultured_Content()
        {
            var testContent = "*-* test *-*";

            await _contentRepository.InsertAsync(
                new TextTemplateContent(Guid.NewGuid(), "ForgotPasswordEmail", testContent, "ar"));

            var content = await _contentProvider.GetContentOrNullAsync("ForgotPasswordEmail", "ar");

            content.ShouldBe(testContent);
        }
    }
}