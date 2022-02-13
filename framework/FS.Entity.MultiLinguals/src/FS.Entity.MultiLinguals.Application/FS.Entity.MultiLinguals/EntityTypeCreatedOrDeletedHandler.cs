using FS.Entity.MultiLinguals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace FS.Entity.MultiLinguals
{
    public class EntityTypeCreatedOrDeletedHandler<T> :
        Volo.Abp.Application.Services.ApplicationService,
        ILocalEventHandler<EntityCreatedEventData<T>>,
        ILocalEventHandler<EntityDeletedEventData<T>>
        where T : Volo.Abp.Domain.Entities.IEntity<Guid>
    {

        public async Task HandleEventAsync(EntityDeletedEventData<T> eventData)
        {
            using (var uow = this.UnitOfWorkManager.Begin(new Volo.Abp.Uow.AbpUnitOfWorkOptions()))
            {
                var store = this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();

                var entity = await store.FindMultiLingualAsync(eventData.Entity);

                if (entity != null)
                    await store.MultiLingual.DeleteAsync(entity);

                await uow.CompleteAsync();
            }


        }

        public async Task HandleEventAsync(EntityCreatedEventData<T> eventData)
        {
            using (var uow = this.UnitOfWorkManager.Begin(new Volo.Abp.Uow.AbpUnitOfWorkOptions()))
            {
                var store = this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualsStore>();

                if (await store.FindMultiLingualAsync<T>(eventData.Entity) != null)
                    return;

                var entity = await store.CreateMultiLingualAsync(eventData.Entity);

                await store.MultiLingual.InsertAsync(entity);

                await uow.CompleteAsync();
            }

        }
    }
}
