using Volo.Abp.ObjectExtending;

namespace Volo.Abp.LanguageManagement.Dto
{
    public class CreateLanguageDto : ExtensibleObject
    {
        public string DisplayName { get; set; }

        public string CultureName { get; set; }

        public string UiCultureName { get; set; }

        public string FlagIcon { get; set; }

        public bool IsEnabled { get; set; }

        public CreateLanguageDto()
            : base(false)
        {
            
        }
    }
}
