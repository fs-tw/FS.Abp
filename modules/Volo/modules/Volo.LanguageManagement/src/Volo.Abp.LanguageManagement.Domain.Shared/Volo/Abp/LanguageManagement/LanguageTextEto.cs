using System;
using JetBrains.Annotations;

namespace Volo.Abp.LanguageManagement
{
    [Serializable]
    public class LanguageTextEto
    {
        public Guid Id { get; set; }

        public Guid? TenantId { get; set; }

        public string ResourceName { get; set; }

        public string CultureName { get; set; }

        public string Name { get; set; }

        public string Value { get; set; }
    }
}
