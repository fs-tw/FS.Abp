using System;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement
{
    public class TextManagementTestData : ISingletonDependency
    {
        public const string ForgotPasswordEmailTemplate = "ForgotPasswordEmail";
        public const string WelcomeEmailTemplate = "WelcomeEmail";

        public const byte TotalTemplateContentCount = 4;
        
        public Guid TextTemplate1Id { get; } = Guid.NewGuid();
        public Guid TextTemplate2Id { get; } = Guid.NewGuid();
        public Guid TextTemplate3Id { get; } = Guid.NewGuid();
        public Guid TextTemplate4Id { get; } = Guid.NewGuid();
        
        public TextTemplateContent TextTemplateContent1 { get; private set; }
        public TextTemplateContent TextTemplateContent2 { get; private set; }
        public TextTemplateContent TextTemplateContent3 { get; private set; }
        public TextTemplateContent TextTemplateContent4 { get; private set; }

        public TextManagementTestData()
        {
            TextTemplateContent1 = new TextTemplateContent(TextTemplate1Id, "Text Template 1", "**Template1 Content**", "tr");
            TextTemplateContent2 = new TextTemplateContent(TextTemplate2Id, "Text Template 2", "**Template2 Content**", "en");
            TextTemplateContent3 = new TextTemplateContent(TextTemplate3Id, "Text Template 3", "**Template3 Content**", "fr");
            TextTemplateContent4 = new TextTemplateContent(TextTemplate4Id, "Text Template 4", "**Template3 Content**");
        }
    }
}