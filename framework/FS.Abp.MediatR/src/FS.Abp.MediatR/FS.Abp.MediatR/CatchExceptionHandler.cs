using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Abp.MediatR
{
    public class CatchExceptionHandler : IRequestHandler<CatchException>
    {
        private readonly Volo.Abp.Auditing.IAuditingManager _auditingManager;
        private readonly global::MediatR.IMediator _mediator;
        public CatchExceptionHandler(
            Volo.Abp.Auditing.IAuditingManager auditingManager,
            global::MediatR.IMediator mediator)
        {
            _auditingManager = auditingManager;
            _mediator = mediator;
        }

        public async Task<Unit> Handle(CatchException request, CancellationToken cancellationToken)
        {
            try
            {
                await _mediator.Send(request.Peer);
            }
            catch (Exception e)
            {
                _auditingManager.Current?.Log?.Exceptions?.Add(e);
                request?.CatchAction?.Invoke(e);
            }
            return Unit.Value;
        }
    }
}
