namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class TextTemplateConsts
    {
        /// <summary>
        /// Default value: 128
        /// Ref = TemplateDefinition.MaxNameLength
        /// </summary>
        public static int MaxNameLength { get; set; } = 128;

        /// <summary>
        /// Default value: 1
        /// </summary>
        public static int MinCultureNameLength { get; set; } = 1;

        /// <summary>
        /// Default value: 10
        /// </summary>
        public static int MaxCultureNameLength { get; set; } = 10;

        /// <summary>
        /// Default value: 65535
        /// </summary>
        public static int MaxContentLength { get; set; } = 65535;
    }
}