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

namespace FS.Theme.Routes
{
    public partial class RouteConfig 
    {

        public RouteConfig()
        {
            OnCreated();
        }

        public virtual string Icon
        {
            get;
            set;
        }

        public virtual string Url
        {
            get;
            set;
        }

        public virtual int Sequence
        {
            get;
            set;
        }

        public virtual bool OpenAnotherWindow
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
