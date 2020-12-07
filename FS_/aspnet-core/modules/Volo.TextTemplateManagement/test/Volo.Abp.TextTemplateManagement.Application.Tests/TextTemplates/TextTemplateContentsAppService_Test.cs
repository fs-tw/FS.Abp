using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class TextTemplateContentsAppService_Test : TextTemplateManagementApplicationTestBase
    {
        private readonly ITemplateContentAppService _templateContentAppService;
        private readonly ITextTemplateContentRepository _contentRepository;

        private readonly TextManagementTestData _testData;
        public TextTemplateContentsAppService_Test()
        {
            _templateContentAppService = GetRequiredService<ITemplateContentAppService>();
            _testData = GetRequiredService<TextManagementTestData>();
            _contentRepository = GetRequiredService<ITextTemplateContentRepository>();
        }

        [Fact]
        public async Task INLINE_Should_Add_New_Cultured_Content()
        {
            
            var template = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate
                });

            var input = new UpdateTemplateContentInput()
            {
                Content = "new - test - content",
                CultureName = "test-cult",
                TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate
            };

            // add new cultured content
            await _templateContentAppService.UpdateAsync(input);

            var non_cultured = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate
                });

            non_cultured.Content.ShouldBe(template.Content);

            var cultured = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate,
                    CultureName = "test-cult"
                });

            cultured.Content.ShouldBe("new - test - content");
        }

        [Fact]
        public async Task INLINE_Should_Remove_Stored_Content_When_Inserted_Default()
        {
            var template = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate
                });

            var originalContent = template.Content;

            // First we add a new cultured content
            var input = new UpdateTemplateContentInput()
            {
                Content = "new - test - content",
                CultureName = "test-cult",
                TemplateName = TextManagementTestData.ForgotPasswordEmailTemplate
            };

            await _templateContentAppService.UpdateAsync(input);

            // then we update new cultured content with default
            input.Content = originalContent;

            await _templateContentAppService.UpdateAsync(input);


            // We excepting the stored content is deleted
            var storedContent = await _contentRepository.FindAsync(TextManagementTestData.ForgotPasswordEmailTemplate, "test-cult");

            storedContent.ShouldBeNull();
        }

        [Fact]
        public async Task MultiFile_Should_Return_Default_Content()
        {
            var defaultTemplate = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.WelcomeEmailTemplate
                });

            var templateWithCulture = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    TemplateName = TextManagementTestData.WelcomeEmailTemplate,
                    CultureName = "tr" // tr is set for default at definitionProfiver.cs
                });

            defaultTemplate.Content.ShouldBe(templateWithCulture.Content);
        }

        [Theory]
        [InlineData("tr")]
        [InlineData("en")]
        [InlineData("en-US")]
        public async Task MultiFile_Should_Remove_Stored_Content_When_Inserted_Default(string culture)
        {
            var template = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput
                {
                    TemplateName = TextManagementTestData.WelcomeEmailTemplate,
                    CultureName = culture
                });

            // store originalContent for future
            var originalContent = template.Content;

            // first update same culture with new content

            var updatedContent = await _templateContentAppService.UpdateAsync(
                new UpdateTemplateContentInput
                {
                    CultureName = culture,
                    TemplateName = TextManagementTestData.WelcomeEmailTemplate,
                    Content = "-*|*- changed for test"
                }
            );

            updatedContent.Content.ShouldNotBe(originalContent);

            // lets update again with original content

            await _templateContentAppService.UpdateAsync(
                new UpdateTemplateContentInput
                {
                    CultureName = culture,
                    TemplateName = TextManagementTestData.WelcomeEmailTemplate,
                    Content = originalContent
                }
            );


            var storedData = await _contentRepository.FindAsync(TextManagementTestData.WelcomeEmailTemplate, "tr");

            storedData.ShouldBeNull();
        }
    }
}