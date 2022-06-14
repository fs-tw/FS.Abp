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
        public string ParentNo { get; set; } = "Taichung";
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
            var parentCode = await _codingTreeRepository.FindByNoAsync(request.ParentNo);

            var datas = new List<Coding.Codes.Coding>
                {
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "North",Value = "北區",DisplayName="北區",ParentId = parentCode.Id},
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "South",Value = "南區",DisplayName="南區",ParentId = parentCode.Id},
                };
           await _codesStore.Coding.InsertManyAsync(datas);
           return Unit.Value;

        }

    }
}
