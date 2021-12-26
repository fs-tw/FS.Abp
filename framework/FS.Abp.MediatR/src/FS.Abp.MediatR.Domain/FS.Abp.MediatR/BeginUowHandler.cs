using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Abp.MediatR
{
    public class BeginUowHandler : IRequestHandler<BeginUow>
    {
        private readonly Volo.Abp.Uow.IUnitOfWorkManager _unitOfWork;
        private readonly global::MediatR.IMediator _mediator;
        public BeginUowHandler(
            Volo.Abp.Uow.IUnitOfWorkManager unitOfWork,
            global::MediatR.IMediator mediator)
        {
            _unitOfWork = unitOfWork;
            _mediator = mediator;
        }

        public async Task<Unit> Handle(BeginUow request, CancellationToken cancellationToken)
        {
            using (var uow = _unitOfWork.Begin(request.Options, request.RequiresNew))
            {
                await _mediator.Send(request.Peer);
                await uow.SaveChangesAsync();
                await uow.CompleteAsync();
            }
            return Unit.Value;
        }
    }
}
