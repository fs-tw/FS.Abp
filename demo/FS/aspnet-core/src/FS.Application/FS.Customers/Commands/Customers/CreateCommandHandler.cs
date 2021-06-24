using FS.Customers.Dtos;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Customers.Commands.Customers
{
    public class CreateCommandHandler : FSAppService,MediatR.IRequestHandler<CreateCommand, CustomerWithDetailsDto>
    {
        public async Task<CustomerWithDetailsDto> Handle(CreateCommand request, CancellationToken cancellationToken)
        {
            ICustomerCrudAppService appService = this.LazyServiceProvider.LazyGetRequiredService<ICustomerCrudAppService>();
            return await appService.CreateAsync(request.input);
        }
    }
}
