﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;

namespace FS.Cms.Core
{
    public partial class CmsImageField 
    {

        public CmsImageField()
        {
            OnCreated();
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual string Url
        {
            get;
            set;
        }

        public virtual decimal Width
        {
            get;
            set;
        }

        public virtual decimal Height
        {
            get;
            set;
        }

        public virtual bool IsCover
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
