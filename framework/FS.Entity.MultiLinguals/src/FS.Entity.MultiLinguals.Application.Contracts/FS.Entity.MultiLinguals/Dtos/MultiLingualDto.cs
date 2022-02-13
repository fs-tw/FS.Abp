using System.Collections.Generic;

namespace FS.Entity.MultiLinguals.Dtos
{
    public partial class MultiLingualFindDto : AutoFilterer.Types.FilterBase
    {
        public string EntityType { get; set; }
        public string EntityId { get; set; }

    }
    public partial class TranslationDto
    {
        public virtual string Culture { get; set; }

        public virtual List<Volo.Abp.NameValue> Properties { get; set; }
    }
    public partial class MultiLingualPatchDto
    {

        public string EntityType { get; set; }
        public string EntityId { get; set; }

        public List<TranslationDto> Translations { get; set; }
    }
}
