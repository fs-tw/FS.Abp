using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.FormManagement.Versions
{
    public partial interface IVersionsStore
    {
        Task<VersionDefinition> GetAsync<TEntity>(string entityKey = null)
            where TEntity : IVersion;
        Task<VersionDefinition> Commit<TEntity>(string entityKey = null)
            where TEntity : IVersion;
        Task<VersionDefinition> ResetAsync<TEntity>(Guid versionId, string entityKey = null)
            where TEntity : IVersion;
    }
    public partial class VersionsStore
    {
        public async Task<VersionDefinition> GetAsync<TEntity>(string entityKey = null)
            where TEntity : IVersion
        {
            var entityType = typeof(TEntity).Name;
            var definition = await this.VersionDefinition.FindAsync<TEntity>(entityKey);
            return definition;
        }

        public async Task<VersionDefinition> Commit<TEntity>(string entityKey = null)
            where TEntity : IVersion
        {
            var entityType = typeof(TEntity).Name;
            var definition = await this.VersionDefinition.FindOrInsertAsync<TEntity>(entityKey);

            int nextNo = 0;
            var exist = (await this.Version.GetQueryableAsync()).Where(x => x.VersionDefinitionId == definition.Id);
            if (exist.Count() == 0)
                nextNo = 1;
            else
                nextNo = exist.Max(x => x.No) + 1;

            var version = definition.CurrentVersion;
            var newVersionId = this.GuidGenerator.Create();

            var newVersion = new Version(newVersionId, definition.Id, CurrentTenant.Id)
            {
                No = nextNo
            };

            if (version != null)
            {
                version.NextVersionId = newVersion.Id;
                newVersion.PrevVersionId = version.Id;
                await this.Version.UpdateAsync(version, true);
            };
            await this.Version.InsertAsync(newVersion, true);

            definition.CurrentVersionId = newVersion.Id;
            await this.VersionDefinition.UpdateAsync(definition, true);


            return definition;
        }

        public async Task<VersionDefinition> ResetAsync<TEntity>(Guid versionId, string entityKey = null)
            where TEntity : IVersion
        {
            var definition = await this.VersionDefinition.FindAsync<TEntity>(entityKey);
            if (definition == null)
                throw new Volo.Abp.UserFriendlyException("無此版本定義");

            if (definition.Versions.Count(x => x.Id == versionId) != 1)
                throw new Volo.Abp.UserFriendlyException("無此版本");

            definition.CurrentVersionId = versionId;
            await this.VersionDefinition.UpdateAsync(definition);
            return definition;
        }

    }
}
