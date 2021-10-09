using FS.Abp.Collections;
using System;
using System.Linq;
using Volo.CmsKit;

namespace FS.Abp.EntityTypes
{
    public class EntityTypeDefinitions : TypeDictionary<EntityTypeDefinition>
    {
        protected override Func<Type, EntityTypeDefinition> DefaultFactory => (t) => new DefaultEntityTypeDefinition(t);
    }
    public class EntityTypeOptions : TypeDictionary<EntityTypeDefinitions>
    {
        protected override Func<Type, EntityTypeDefinitions> DefaultFactory => (t) => new EntityTypeDefinitions();
    }
}
