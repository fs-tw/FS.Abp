﻿using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.MongoDB
{
    public class AbpMongoModelBuilderConfigurationOptions : Volo.Abp.MongoDB.AbpMongoModelBuilderConfigurationOptions
    {
        public AbpMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}