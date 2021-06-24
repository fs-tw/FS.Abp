using FS.Abp.MediatR;
using FS.Customers.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Customers.Commands.Customers
{
    public record UpdateCommand(CustomerPrimaryKeyDto id = null, CustomerUpdateDto input = null) :
        ICommand,
        MediatR.IRequest<CustomerWithDetailsDto>
    {
    }
}
