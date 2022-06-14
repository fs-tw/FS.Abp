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
    public class CreateDefaultCoding : IRequest
    {
        public Coding.Codes.Coding Coding { get; set; }
        
    }

    public class CreateDefaultCodingHandler : IRequestHandler<CreateDefaultCoding>
    {
        private readonly ICodesStore _codesStore;
        private readonly ICodingTreeRepository _codingTreeRepository;
        private readonly IGuidGenerator _guidGenerator;

        public CreateDefaultCodingHandler(ICodesStore codesStore, IGuidGenerator guidGenerator, ICodingTreeRepository codingTreeRepository)
        {
            _codesStore = codesStore;
            _guidGenerator = guidGenerator;
            _codingTreeRepository = codingTreeRepository;

        }

        public async Task<Unit> Handle(CreateDefaultCoding request, CancellationToken cancellationToken)
        {
            var datas = new List<Coding.Codes.Coding>
                {
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "South",Value = "北區",DisplayName="北區",ParentId = request.Coding.Id},
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "North",Value = "南區",DisplayName="南區",ParentId = request.Coding.Id},
                };
           await _codesStore.Coding.InsertManyAsync(datas);
           return Unit.Value;

        }

    }
}
