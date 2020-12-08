using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Pagination;

namespace Volo.Abp.LeptonTheme.Demo.Pages.Layouts.Application.Components
{
    public class PaginationModel : PageModel
    {
        
        public PagerModel PagerModel { get; set; }
        
        public void OnGet(int currentPage = 1, string sort = null)
        {
            PagerModel = new PagerModel(100, 10, currentPage, 10, "/Layouts/Application/Components/Pagination", sort);
        }
    }
}