using FS.Abp.Collections;
using System;

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

    //public class EntityDefinitionOptions : TypeDictionary<EntityDefinition>
    //{
    //    protected override Func<Type, EntityDefinition> DefaultFactory => (t) => new EntityDefinition();

    //    public Volo.Abp.Collections.TypeList Other = new Volo.Abp.Collections.TypeList();
    //}
}
