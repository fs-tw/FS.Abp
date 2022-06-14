using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using FS.Coding.Codes;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Guids;

namespace FS.CodingManagement.Mediator
{
    public class CreateDefaultCodes : IRequest
    {
        public List<CreateDefaultCodes> Children { get; set; }

        public string Value { get; set; } = "Taichung";

        public string No { get; set; } = "Taichung";

        public string DisplayName { get; set; } = "台中";

        //public Coding.Codes.Coding Coding { get; set; }

        public CreateDefaultCodes()
        {
            this.Children=new List<CreateDefaultCodes>();
        }

    }

    public class CreateDefaultCodesHandler : IRequestHandler<CreateDefaultCodes>
    {
        private readonly ICodesStore _codesStore;
        private readonly ICodingTreeRepository _codingTreeRepository;
        private readonly IGuidGenerator _guidGenerator;

        public CreateDefaultCodesHandler(ICodesStore codesStore, IGuidGenerator guidGenerator, ICodingTreeRepository codingTreeRepository)
        {
            _codesStore = codesStore;
            _guidGenerator = guidGenerator;
            _codingTreeRepository = codingTreeRepository;

        }

        public async Task<Unit> Handle(CreateDefaultCodes request, CancellationToken cancellationToken)
        {
            var root = new Coding.Codes.Coding(_guidGenerator.Create()) { No=request.No, Value=request.Value, DisplayName=request.DisplayName };


            append(root, request.Children);

            await _codesStore.Coding.InsertAsync(root);
            return Unit.Value;

        }

        private void append(Coding.Codes.Coding parent, List<CreateDefaultCodes> children)
        {
            children.ForEach(x =>
            {
                var item = new Coding.Codes.Coding(_guidGenerator.Create()) { No =x.No, Value = x.Value, DisplayName=x.Value, ParentId = parent.Id };
                parent.Children.Add(item);

                if (x.Children?.Count>0)
                {
                    append(item, x.Children);
                }

            });
        }

    }
}
