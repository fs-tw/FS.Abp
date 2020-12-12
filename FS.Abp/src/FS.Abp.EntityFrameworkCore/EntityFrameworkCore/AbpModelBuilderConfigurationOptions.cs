﻿using JetBrains.Annotations;

namespace FS.Abp.EntityFrameworkCore
{
    public class AbpModelBuilderConfigurationOptions : Volo.Abp.EntityFrameworkCore.Modeling.AbpModelBuilderConfigurationOptions
    {
        public AbpModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}