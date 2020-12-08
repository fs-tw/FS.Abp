namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class TemplateDefinitionDto
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }

        public bool IsLayout { get; set; }

        public string Layout { get; set; }

        public bool IsInlineLocalized { get; set; }

        public string DefaultCultureName { get; set; }
    }
}