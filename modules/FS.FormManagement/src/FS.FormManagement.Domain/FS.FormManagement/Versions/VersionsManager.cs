using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Users;

namespace FS.FormManagement.Versions
{
    public class VersionsManager : Volo.Abp.Domain.Services.DomainService, IVersionsManager
    {
        protected IVersionsStore VersionsStore => this.LazyServiceProvider.LazyGetRequiredService<IVersionsStore>();
        public async Task<VersionDefinition> Commit<TEntity>(string entityKey = null)
           where TEntity : IVersion
        {
            return await VersionsStore.Commit<TEntity>(entityKey);
        }
    }
}
