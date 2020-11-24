using FS.Abp.Core.Files;
using FS.Abp.Files;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace FS.Cms.Storage
{
    public class StorageEventHandler : ILocalEventHandler<FileChangedEvent>, ITransientDependency
    {
        private readonly IStorageManager storageManager;

        public StorageEventHandler(
            IStorageManager storageManager
            )
        {
            this.storageManager = storageManager;
        }

        public async Task HandleEventAsync(FileChangedEvent eventData)
        {
            if (eventData.IsDelete) await this.storageManager.DeleteCodeFile(eventData.Name);
            else await this.storageManager.CreateCodeFile(eventData.Name);            
        }
    }
}
