using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Services;

namespace FS.Abp.Coding
{
    public partial interface ICodingStore : IDomainService
    {
        ICodesTreeRepository Codes { get; }
    }
    public partial class CodingStore : DomainService
    {
        private ICodesTreeRepository _Codes;
        public ICodesTreeRepository Codes => this.LazyGetRequiredService(ref _Codes);


    }
}
