using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.SerialNumbers
{
    public partial class SerialNumbersManager : DomainService, ISerialNumbersManager
    {
        protected IProviderStore ProviderStore => this.LazyServiceProvider.LazyGetRequiredService<IProviderStore>();
        protected ISerialNumbersStore SerialNumbersStore => this.LazyServiceProvider.LazyGetRequiredService<ISerialNumbersStore>();
        public async Task<string> GenerateAsync(string providerName, string providerKey = null)
        {
            var provider = await ProviderStore.GetProviderAsync(providerName);

            var serialNumber = await this.SerialNumbersStore.SerialNumber.GenerateAsync(providerName, providerKey);

            var generator = this.LazyServiceProvider.LazyGetRequiredService(provider.GeneratorType) as IGenerator;

            return generator.Create(provider, serialNumber);
        }
    }
}
