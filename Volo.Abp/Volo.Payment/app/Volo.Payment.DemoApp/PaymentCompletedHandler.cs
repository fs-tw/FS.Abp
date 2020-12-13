using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;
using Volo.Payment.Requests;

namespace Volo.Payment.DemoApp
{
    public class PaymentCompletedHandler : IDistributedEventHandler<PaymentRequestCompletedEto>, ITransientDependency
    {
        public Task HandleEventAsync(PaymentRequestCompletedEto eventData)
        {
            return Task.CompletedTask;
        }
    }
}
