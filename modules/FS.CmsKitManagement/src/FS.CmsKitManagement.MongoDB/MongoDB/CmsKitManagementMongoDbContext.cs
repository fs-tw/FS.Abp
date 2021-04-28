﻿using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.CmsKitManagement.MongoDB
{
    [ConnectionStringName(CmsKitManagementDbProperties.ConnectionStringName)]
    public class CmsKitManagementMongoDbContext : AbpMongoDbContext, ICmsKitManagementMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureCmsKitManagement();
        }
    }
}