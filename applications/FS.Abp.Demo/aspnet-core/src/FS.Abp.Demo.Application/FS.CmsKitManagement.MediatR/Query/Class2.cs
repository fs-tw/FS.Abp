using MR = MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.CmsKitManagement.MediatR.Query
{
    public record Test2Query(string application, string name) : FS.Abp.MediatR.IQuery, MR.IRequest
    {

    }

    public class Test2QueryHandler : CmsKitManagementAppService, MR.IRequestHandler<Test2Query>
    {
        public Task<MR.Unit> Handle(Test2Query request, CancellationToken cancellationToken)
        {
            return MR.Unit.Task;
        }
    }
}
