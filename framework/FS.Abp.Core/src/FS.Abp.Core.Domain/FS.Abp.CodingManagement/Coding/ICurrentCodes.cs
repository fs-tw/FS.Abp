using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.CodingManagement.Coding
{
    public interface ICurrentCodesAccessor
    {
        BasicCodesInfo Current { get; set; }
    }
    public interface ICurrentCodes
    {
        Guid? Id { get; }

        string Name { get; }

        IDisposable Change(Guid? id, string name = null);

    }
}
