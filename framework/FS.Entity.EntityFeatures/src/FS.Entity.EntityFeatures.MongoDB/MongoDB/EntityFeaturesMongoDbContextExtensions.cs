﻿using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityFeatures.MongoDB;

public static class EntityFeaturesMongoDbContextExtensions
{
    public static void ConfigureEntityFeatures(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
