using System;
using JetBrains.Annotations;

namespace Volo.Abp.LanguageManagement
{
    [Serializable]
    public class LanguageEto
    {
        public Guid Id { get; set; }

        [NotNull]
        public string CultureName { get; set; }

        [NotNull]
        public string UiCultureName { get; set; }

        [NotNull]
        public string DisplayName { get; set; }

        public string FlagIcon { get; set; }

        public bool IsEnabled { get; set; }
    }
}
