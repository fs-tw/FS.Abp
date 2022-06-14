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
    public class CreateDefaultCodingParent : IRequest<Coding.Codes.Coding>
    {
        public string No { get; set; } = "Taichung";
        public string DisplayName { get; set; } = "台中";
    }

    public class CreateDefaultCodingParentHandler : IRequestHandler<CreateDefaultCodingParent, Coding.Codes.Coding>
    {
        private readonly ICodesStore _codesStore;
        private readonly IGuidGenerator _guidGenerator;

        public CreateDefaultCodingParentHandler(ICodesStore codesStore, IGuidGenerator guidGenerator)
        {
            _codesStore = codesStore;
            _guidGenerator = guidGenerator;
        }

        public async Task<Coding.Codes.Coding> Handle(CreateDefaultCodingParent request, CancellationToken cancellationToken)
        {
            var code = new Coding.Codes.Coding(_guidGenerator.Create()) { No = request.No, Value = request.No, DisplayName = request.DisplayName };
            return await _codesStore.Coding.InsertAsync(code);
        }

    }
}
