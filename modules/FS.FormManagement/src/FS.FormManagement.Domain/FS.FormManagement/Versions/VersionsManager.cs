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

        public async Task NewVersionAsync(string documentDefinitionNo, Guid? sourceVersionId = null, string Description = null)
        {
            var definition = await this.VersionsStore.VersionDefinition.FindAsync(x => x.EntityType == documentDefinitionNo);
            var newVersionId = GuidGenerator.Create();

            var maxNo = this.VersionsStore.Version.Where(x => x.DocumentDefinitionId == definition.Id).Max(x => x.No);

            var next = Int32.Parse(maxNo) + 1;

            var version = new Version(newVersionId, definition.Id, CurrentTenant.Id)
            {
                PrevVersionId = definition.CurrentVersionId
            };
            definition.CurrentVersion = version;

            return;
        }
        public async Task AcceptAsync(string versionDefinitionKey)
        {
            return;
        }
        public async Task RejectAsync(string versionDefinitionKey)
        {
            return;
        }
    }
}
