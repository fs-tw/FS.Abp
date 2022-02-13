using FS.Abp.Collections;
using System;

namespace FS.Entity.EntityFeatures
{
    public class EntityFeatureDefinitions : TypeDictionary<EntityFeatureDefinition>
    {
        public override void AddOrReplace<TKey>(EntityFeatureDefinition value = null)
        {
            if (value==null)
                value=new DefaultEntityFeatureDefinition(typeof(TKey));
            base.AddOrReplace<TKey>(value);
        }
    }

    public class EntityFeaturesOptions : TypeDictionary<EntityFeatureDefinitions>
    {
    }
}
