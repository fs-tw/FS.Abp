using Microsoft.Extensions.Localization;
using System.Threading.Tasks;
using Volo.Abp.LeptonTheme.Demo.Localization.Resource;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LeptonTheme.Demo.Navigation
{
    public class DemoMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            var l = context.GetLocalizer<DemoResource>();

            if (context.Menu.Name == StandardMenus.Main)
            {
                FillMainMenu(context, l);
            }
            else if (context.Menu.Name == StandardMenus.Shortcut)
            {
                FillShortcutMenu(context, l);
            }

            return Task.CompletedTask;
        }

        private static void FillMainMenu(MenuConfigurationContext context, IStringLocalizer l)
        {
            AddDashboard(context, l);
            AddComponents(context, l);
            AddTables(context, l);
            AddLibraries(context, l);
            AddCustomPages(context, l);
            AddForms(context, l);
        }

        private static void AddDashboard(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menu =  new ApplicationMenuItem(DemoMenu.Dashboard.Base, l["Dashboard"], icon: "fa fa-dashboard");
            
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Dashboard.Dashboard1, l["Dashboard1"], "~/Layouts/Application/Dashboard/Dashboard"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Dashboard.Dashboard2, l["Dashboard2"], "~/Layouts/Application/Dashboard/Dashboard2"));

            context.Menu.AddItem(menu);
        }

        private static void AddComponents(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menu = new ApplicationMenuItem(DemoMenu.Components.Base, l["Components"], icon: "fa fa-star");
            
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Alerts, l["Alerts"], "~/Layouts/Application/Components/Alerts"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Badges, l["Badges"], "~/Layouts/Application/Components/Badges"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Borders, l["Borders"], "~/Layouts/Application/Components/Borders"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Breadcrumbs, l["Breadcrumbs"], "~/Layouts/Application/Components/Breadcrumbs"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Buttons, l["Buttons"], "~/Layouts/Application/Components/Buttons"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.ButtonGroups, l["ButtonGroups"], "~/Layouts/Application/Components/ButtonGroups"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Cards, l["Cards"], "~/Layouts/Application/Components/Cards"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Carousel, l["Carousel"], "~/Layouts/Application/Components/Carousel"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Collapse, l["Collapse"], "~/Layouts/Application/Components/Collapse"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Dropdowns, l["Dropdowns"], "~/Layouts/Application/Components/Dropdowns"));
            //menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Icons, l["Icons"], "~/Layouts/Application/Components/Icons"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.ListGroups, l["ListGroups"], "~/Layouts/Application/Components/ListGroups"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Modals, l["Modals"], "~/Layouts/Application/Components/Modals"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Pagination, l["Pagination"], "~/Layouts/Application/Components/Pagination"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Progress, l["Progress"], "~/Layouts/Application/Components/Progress"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Tabs, l["Tabs"], "~/Layouts/Application/Components/Tabs"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Components.Tooltips, l["Tooltips"], "~/Layouts/Application/Components/Tooltips"));
            
            context.Menu.AddItem(menu);
        }

        private static void AddTables(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menuItem = new ApplicationMenuItem(DemoMenu.Tables.Base, l["Tables"], icon: "fa fa-table");

            menuItem.AddItem(new ApplicationMenuItem(DemoMenu.Tables.BasicTables, l["BasicTables"], "~/Layouts/Application/Tables/BasicTables"));
            menuItem.AddItem(new ApplicationMenuItem(DemoMenu.Tables.DataTables, l["DataTables"], "~/Layouts/Application/Tables/DataTables"));
             
        }

        private static void AddLibraries(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menu = new ApplicationMenuItem(DemoMenu.Libraries.Base, l["Libraries"], icon: "fa fa-cube");

            menu.AddItem(new ApplicationMenuItem(DemoMenu.Libraries.CustomScroll, l["CustomScroll"], "~/Layouts/Application/Libraries/CustomScroll"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Libraries.JsTree, l["JsTree"], "~/Layouts/Application/Libraries/JsTree"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Libraries.Toastr, l["Toastr"], "~/Layouts/Application/Libraries/Toastr"));
            menu.AddItem(new ApplicationMenuItem(DemoMenu.Libraries.SweetAlert, l["SweetAlert"], "~/Layouts/Application/Libraries/SweetAlert"));

            context.Menu.AddItem(menu);
        }

        private static void AddCustomPages(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menu = new ApplicationMenuItem(DemoMenu.CustomPages.Base, l["CustomPages"], icon: "fa fa-folder");

            var errorPages = new ApplicationMenuItem(DemoMenu.CustomPages.ErrorPages.Base, l["ErrorPages"]);
            
            menu.AddItem(errorPages);
            
            errorPages.AddItem(new ApplicationMenuItem(DemoMenu.CustomPages.ErrorPages.ErrorPage401, l["ErrorPage401"], "~/Layouts/Application/CustomPages/ErrorPages/ErrorPage401"));
            errorPages.AddItem(new ApplicationMenuItem(DemoMenu.CustomPages.ErrorPages.ErrorPage403, l["ErrorPage403"], "~/Layouts/Application/CustomPages/ErrorPages/ErrorPage403"));
            errorPages.AddItem(new ApplicationMenuItem(DemoMenu.CustomPages.ErrorPages.ErrorPage404, l["ErrorPage404"], "~/Layouts/Application/CustomPages/ErrorPages/ErrorPage404"));
            errorPages.AddItem(new ApplicationMenuItem(DemoMenu.CustomPages.ErrorPages.ErrorPage500, l["ErrorPage500"], "~/Layouts/Application/CustomPages/ErrorPages/ErrorPage500"));

            context.Menu.AddItem(menu);
        }

        private static void AddForms(MenuConfigurationContext context, IStringLocalizer l)
        {
            var menu = new ApplicationMenuItem(DemoMenu.Forms.Base, l["Forms"], icon: "fa fa-list");

            var controls = new ApplicationMenuItem(DemoMenu.Forms.Controls.Base, l["Controls"], "~/Layouts/Application/Forms/Controls");
            menu.AddItem(controls);
            
            controls.AddItem(new ApplicationMenuItem(DemoMenu.Forms.Controls.BaseInputs, l["BaseInputs"], "~/Layouts/Application/Forms/Controls/BaseInputs"));

            context.Menu.AddItem(menu);
        }
        
        private static void FillShortcutMenu(MenuConfigurationContext context, IStringLocalizer l)
        {
            context.Menu
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.1", l["My Favourite Reports"], "#", "fa fa-heart fa-fw"))
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.1", l["Calendar"], "#", "fa fa-calendar fa-fw"))
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.2", l["My Theme HTML Guide"], "#", "fa fa-book fa-fw"))
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.4", l["Most Used Scripts"], "#", "fa fa-star fa-fw"))
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.5", l["Show Datatable"], "#", "fa fa-list fa-fw"))
                .AddItem(new ApplicationMenuItem("Demo.Shortcut.6", l["Add New Shortcut"], "#", "fa fa-plus fa-fw"));
        }
    }
}
