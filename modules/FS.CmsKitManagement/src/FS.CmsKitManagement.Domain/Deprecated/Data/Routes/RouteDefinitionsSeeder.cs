using FS.Abp.Npoi.Mapper;
using FS.CmsKitManagement.Routes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities;
using FS.Abp.Data;

namespace FS.CmsKitManagement.Data.Routes
{
    public class RouteDefinitionsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
    }

    public class RouteDefinitionsSeeder : FS.Abp.Data.Seeder<RouteDefinitionsSeederOptions>
    {
        protected readonly string PublicDefinitionNo = "Public";

        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();

        protected IRoutesStore RoutesStore => this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();

        protected override async Task SeedAsync(DataSeedContext context)
        {
            var definition = await this.AsyncExecuter.SingleOrDefaultAsync(this.RoutesStore.RouteDefinition
                    .Where(x => x.No == this.PublicDefinitionNo));

            if (definition != null)
            {
                context.SetProperty(new Dictionary<string, RouteDefinition>()
                {
                    [definition.No] = definition
                });
                return;
            }

            var newEntity = new RouteDefinition()
            {
                No = this.PublicDefinitionNo,
                DisplayName = this.PublicDefinitionNo,
                TenantId = this.CurrentTenant.Id
            };
            EntityHelper.TrySetId(newEntity, this.GuidGenerator.Create);
            await this.RoutesStore.RouteDefinition.InsertAsync(newEntity, true);

            context.SetProperty(new Dictionary<string, RouteDefinition>()
            {
                [newEntity.No] = newEntity
            });
        }
    }
}
