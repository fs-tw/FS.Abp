using MR = MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.CmsKitManagement.MediatR.Command
{
    public record Test2Command(string application, string name) : FS.Abp.MediatR.ICommand, MR.IRequest
    {

    }

    public class Test2CommandHandler : CmsKitManagementAppService, MR.IRequestHandler<Test2Command>
    {
        public Task<MR.Unit> Handle(Test2Command request, CancellationToken cancellationToken)
        {
            return MR.Unit.Task;
        }
    }
}
