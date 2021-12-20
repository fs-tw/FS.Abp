using MediatR;

namespace FS.Abp.MediatR
{
    public class BeginUow : global::MediatR.IRequest, IBaseRequestDecorator
    {
        public IBaseRequest Peer { get; set; }

        public Volo.Abp.Uow.AbpUnitOfWorkOptions Options { get; set; }

        public bool RequiresNew { get; set; }

        public BeginUow()
        {
            Options = new Volo.Abp.Uow.AbpUnitOfWorkOptions();
        }
    }
}
