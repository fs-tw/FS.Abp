using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Forms.EntityFrameworkCore;

namespace FS.FormManagement.EntityFrameworkCore
{
    public static partial class FormManagementDbContextModelCreatingExtensions
    {
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigureForms();
        }
    }
}
