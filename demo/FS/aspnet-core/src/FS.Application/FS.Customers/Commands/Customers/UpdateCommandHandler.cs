using FS.Customers.Dtos;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Customers.Commands.Customers
{
    public class UpdateCommandHandler : FSAppService, MediatR.IRequestHandler<UpdateCommand, CustomerWithDetailsDto>
    {
        public async Task<CustomerWithDetailsDto> Handle(UpdateCommand request, CancellationToken cancellationToken)
        {
            ICustomerCrudAppService appService = this.LazyServiceProvider.LazyGetRequiredService<ICustomerCrudAppService>();
            return await appService.UpdateAsync(request.id, request.input);
        }
    }
}
