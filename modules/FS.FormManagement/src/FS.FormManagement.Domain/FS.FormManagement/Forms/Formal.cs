using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;
using FS.FormManagement.Versions;

namespace FS.FormManagement.Forms
{

    public partial class Formal : Versions.IVersion
    {
    }
}
