﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.4
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace FS.PrinterManagement.Printing.Dtos
{

    public partial class ParagraphDto
    {
        public virtual string Name { get; set; }

        public virtual string Content { get; set; }

        public virtual float PointX { get; set; }

        public virtual float PointY { get; set; }

        public virtual FS.PrinterManagement.Printing.DrawMethod DrawMethod { get; set; }

        public virtual float FontSize { get; set; }

        public virtual string FontType { get; set; }

    }
}
