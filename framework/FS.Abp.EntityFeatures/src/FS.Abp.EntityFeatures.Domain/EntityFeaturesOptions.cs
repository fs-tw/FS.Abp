using FS.Abp.Collections;
using System;

namespace FS.Abp.EntityFeatures
{
    public class EntityFeatureDefinitions : TypeDictionary<EntityFeatureDefinition>
    {
    }

    public class EntityFeaturesOptions : TypeDictionary<EntityFeatureDefinitions>
    {
    }
}
