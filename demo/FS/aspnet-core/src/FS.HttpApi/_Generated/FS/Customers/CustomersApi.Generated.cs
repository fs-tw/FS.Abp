﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Customers
{
    [Area("fs")]
    [RemoteService(true)]
    [ControllerName("FS.Customers(fs)")]
    [Route("api/fs/customers")]
    public partial class CustomersApi : FSController , ICustomersApi //auto-generated
    {

        ICustomerCrudAppService _CustomerCrudAppService;
        protected ICustomerCrudAppService CustomerCrudAppService => this.LazyGetRequiredService(ref _CustomerCrudAppService);

        [HttpOptions]
        public Dtos.MetaData Options()
        {
            return new Dtos.MetaData();
        }
    }
}
