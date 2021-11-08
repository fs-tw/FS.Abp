using Volo.CmsKit;

namespace FS.Abp.EntityTypes
{
    public class DefaultEntityTypeDefinition : EntityTypeDefinition
    {
        public DefaultEntityTypeDefinition(string name) : base(name) { }
        public DefaultEntityTypeDefinition(System.Type type) : base(type.FullName) { }
    }
}
