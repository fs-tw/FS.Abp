using FS.Abp.Collections;
using System;
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

    public class EntityDefinitionOptions : TypeDictionary<DefaultEntityDefinition>
    {
        protected override Func<Type, DefaultEntityDefinition> DefaultFactory => (t) => new DefaultEntityDefinition();

        public Volo.Abp.Collections.TypeList Other = new Volo.Abp.Collections.TypeList();
    }
}
