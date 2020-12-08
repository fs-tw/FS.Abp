using Volo.Abp.TextTemplating;

namespace Volo.Abp.TextTemplateManagement
{
    public class TestTemplateDefinitionProvider : TemplateDefinitionProvider
    {
        public override void Define(ITemplateDefinitionContext context)
        {
            context.Add(
                new TemplateDefinition(
                    TextManagementTestData.ForgotPasswordEmailTemplate
                ).WithVirtualFilePath("/SampleTemplates/ForgotPasswordEmail.tpl", true)
            );

            context.Add(
                new TemplateDefinition(
                    TextManagementTestData.WelcomeEmailTemplate,
                    defaultCultureName: "tr"
                ).WithVirtualFilePath("/SampleTemplates/WelcomeEmail", false)
            );
        }
    }
}