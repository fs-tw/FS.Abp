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

namespace FS.Wbm.Core
{
    public partial class 過磅日誌 : 
        Volo.Abp.Domain.Entities.Entity<Int64>
    {

        public 過磅日誌()
        {
            OnCreated();
        }

        public virtual System.DateTime 日期
        {
            get;
            set;
        }

        public virtual System.DateTime 時間
        {
            get;
            set;
        }

        public virtual string 內容
        {
            get;
            set;
        }

        public virtual string 操作者
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
