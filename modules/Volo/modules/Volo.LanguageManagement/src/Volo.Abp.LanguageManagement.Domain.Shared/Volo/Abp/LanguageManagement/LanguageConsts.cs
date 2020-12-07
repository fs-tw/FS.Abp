namespace Volo.Abp.LanguageManagement
{
    public static class LanguageConsts
    {
        /// <summary>
        /// Default value: 10
        /// </summary>
        public static int MaxCultureNameLength { get; set; } = 10;

        /// <summary>
        /// Default value: 10
        /// </summary>
        public static readonly int MaxUiCultureNameLength = MaxCultureNameLength;

        /// <summary>
        /// Default value: 32
        /// </summary>
        public static int MaxDisplayNameLength { get; set; } = 32;

        /// <summary>
        /// Default value: 48
        /// </summary>
        public static int MaxFlagIconLength { get; set; } = 48;
    }
}