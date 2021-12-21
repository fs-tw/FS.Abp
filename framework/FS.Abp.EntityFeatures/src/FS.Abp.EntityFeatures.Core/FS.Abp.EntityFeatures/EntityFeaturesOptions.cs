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
    }
}
