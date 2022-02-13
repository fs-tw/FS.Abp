﻿using Volo.Abp.Reflection;

namespace FS.Entity.EntityFeatures.Permissions;

public class EntityFeaturesPermissions
{
    public const string GroupName = "EntityFeatures";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(EntityFeaturesPermissions));
    }
}
