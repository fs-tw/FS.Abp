using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace App1
{
    public class App1MessagingService : ITransientDependency
    {
        private readonly IDistributedEventBus _distributedEventBus;
        private readonly FS.LineNotify.ILineNotifyGateway _lineNotifyGateway;

        public App1MessagingService(
            FS.LineNotify.ILineNotifyGateway lineNotifyGateway,
            IDistributedEventBus distributedEventBus
            )
        {
            _lineNotifyGateway = lineNotifyGateway;
            _distributedEventBus = distributedEventBus;
        }

        public async Task RunAsync()
        {
            Console.WriteLine("*** Started the LineNotify Client App ***");
            Console.WriteLine("Please use this url to login Line,then try to send message with channel 'abc'");
            Console.WriteLine(await _lineNotifyGateway.AuthorizeUrl("fs","abc",@"http://google.com"));

            string message;
            do
            {
                Console.WriteLine();

                message = Console.ReadLine();

                //if (!message.IsNullOrEmpty())
                //{
                //    await _distributedEventBus.PublishAsync(new App1ToApp2TextEventData(message));
                //}
                //else
                //{
                //    await _distributedEventBus.PublishAsync(new App1ToApp2TextEventData("App1 is exiting. Bye bye...!"));
                //}

            } while (!message.IsNullOrEmpty());
        }
    }
}