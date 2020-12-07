using System;
using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Account.Public.Web.Areas.Account.Controllers.Models
{
    public class LinkUserLoginInfo
    {
        [Required]
        public Guid LinkUserId { get; set; }

        public Guid? LinkTenantId { get; set; }
    }
}
