﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 402.0.2
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

namespace FS.Abp.Emailing
{
    public partial class Smtp 
    {

        public Smtp()
        {
            OnCreated();
        }

        public virtual string Host
        {
            get;
            set;
        }

        public virtual int Port
        {
            get;
            set;
        }

        public virtual string UserName
        {
            get;
            set;
        }

        public virtual string Password
        {
            get;
            set;
        }

        public virtual string Domain
        {
            get;
            set;
        }

        public virtual bool EnableSsl
        {
            get;
            set;
        }

        public virtual bool UseDefaultCredentials
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
