namespace Volo.Abp.AuditLogging
{
    public class AuditLogDtoCommonConsts
    {
        /// <summary>
        /// Default value: 512
        /// </summary>
        public static int UrlFilterMaxLength { get; set; } = 512;
        
        /// <summary>
        /// Default value: 128
        /// </summary>
        public static int UserNameFilterMaxLength { get; set; } = 128;
        
        /// <summary>
        /// Default value: 16
        /// </summary>
        public static int HttpMethodFilterMaxLength { get; set; } = 16;
    }
}
