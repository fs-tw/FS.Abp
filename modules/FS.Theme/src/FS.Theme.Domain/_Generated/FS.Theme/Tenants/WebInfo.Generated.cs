﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
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

namespace FS.Theme.Tenants
{
    public partial class WebInfo 
    {

        public WebInfo()
        {
            OnCreated();
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual string Favicon
        {
            get;
            set;
        }

        public virtual int Count
        {
            get;
            set;
        }

        public virtual string Copyright
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
