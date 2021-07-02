using FS.Abp.MediatR;
using FS.Customers.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Customers.Querys.Customers
{
    public record FindQuery(Guid? id = null) :
        IQuery,
        MediatR.IRequest<CustomerWithDetailsDto>
    {
    }
}
