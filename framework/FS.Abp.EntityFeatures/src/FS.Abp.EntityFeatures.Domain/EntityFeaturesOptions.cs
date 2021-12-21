using FS.Abp.Collections;
using System;

namespace FS.Abp.EntityFeatures
{
    public class EntityFeatureDefinitions : TypeDictionary<EntityFeatureDefinition>
    {
        protected override Func<Type, EntityFeatureDefinition> DefaultFactory => (t) => new DefaultEntityFeatureDefinition(t);
    }

    public class EntityFeaturesOptions : TypeDictionary<EntityFeatureDefinitions>
    {
        protected override Func<Type, EntityFeatureDefinitions> DefaultFactory => (t) => new EntityFeatureDefinitions();

        protected override void Check(Type type)
        {
            if (!type.IsAssignableTo<Volo.Abp.Domain.Entities.IEntity>())
                throw new Exception("not allow this type.pls check type must be a IEntity type");
        }
    }
}
