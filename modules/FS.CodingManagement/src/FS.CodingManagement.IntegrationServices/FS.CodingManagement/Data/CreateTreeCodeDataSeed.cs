using System.Threading.Tasks;
using MediatR;

namespace FS.CodingManagement.Data
{
    public class CreateTreeCodeDataSeed : Volo.Abp.DependencyInjection.ITransientDependency
    {
        private readonly IMediator mediator;

        public CreateTreeCodeDataSeed(
            MediatR.IMediator mediator)
        {
            this.mediator = mediator;
        }

        public async Task ExecuteAsync() {
            var command = new Mediator.CreateDefaultCodingParent();
            var result = await mediator.Send(command);
            var command2 = new Mediator.CreateDefaultCoding() {
                Coding = result
            };
            await mediator.Send(command2);
        }
    }
}
