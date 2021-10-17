using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace FS.CmsKitManagement.MultiLinguals
{
    public class EntityTypeCreatingOrDeletingHandler<T> :
        Volo.Abp.Domain.Services.DomainService,
        ILocalEventHandler<EntityCreatingEventData<T>>,
        ILocalEventHandler<EntityDeletingEventData<T>>
        where T : Volo.Abp.Domain.Entities.IEntity<Guid>
    {

        public async Task HandleEventAsync(EntityDeletingEventData<T> eventData)
        {
            var store = this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();

            var entity = await store.FindMultiLingualAsync(eventData.Entity);

            await store.MultiLingual.DeleteAsync(entity);
        }

        public async Task HandleEventAsync(EntityCreatingEventData<T> eventData)
        {
            var store = this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();

            var entity = await store.CreateMultiLingualAsync(eventData.Entity);

            await store.MultiLingual.InsertAsync(entity);
        }
    }
}
