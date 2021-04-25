using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Application.Dtos
{
    public interface IDiscriminatorResultRequest
    {
        string Discriminator { get; set; }
    }
}
