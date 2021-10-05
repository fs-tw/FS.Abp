using Volo.CmsKit;

namespace FS.CmsKitManagement.EntityType
{
    public class DefaultEntityTypeDefinition : EntityTypeDefinition
    {
        public DefaultEntityTypeDefinition(System.Type type) : base(type.FullName) { }
    }
}
