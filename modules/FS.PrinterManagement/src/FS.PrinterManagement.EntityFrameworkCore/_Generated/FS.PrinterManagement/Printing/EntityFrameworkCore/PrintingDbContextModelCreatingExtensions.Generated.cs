﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.4
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.PrinterManagement.Printing.EntityFrameworkCore
{
    public static partial class PrintingDbContextModelCreatingExtensions
    {
        public static void ConfigurePrinting(
            this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            CustomizeMapping(ref builder);

            builder.Ignore<FS.PrinterManagement.Printing.PaperSize>();
            builder.Ignore<FS.PrinterManagement.Printing.Margins>();
            builder.Ignore<FS.PrinterManagement.Printing.Paragraph>();
            builder.ApplyConfiguration<FS.PrinterManagement.Printing.PrintDocumentDefinition>(new FS.PrinterManagement.Printing.EntityFrameworkCore.PrintDocumentDefinitionConfiguration(PrinterManagementDbProperties.DbTablePrefix,PrinterManagementDbProperties.DbSchema));
        }
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder);
    }
}
