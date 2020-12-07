using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Volo.Abp.LeptonTheme.Demo.Pages.Layouts.Account
{
    public class LoginModel : PageModel
    {
        public PostInput Input { get; set; }

        public void OnGet()
        {

        }

        public class PostInput
        {
            [Required]
            [StringLength(255)]
            public string UserName { get; set; }

            [Required]
            [StringLength(32)]
            [DataType(DataType.Password)]
            public string Password { get; set; }

            public bool RememberMe { get; set; }
        }
    }
}