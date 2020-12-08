namespace Volo.Abp.LeptonTheme.Demo.Navigation
{
    public static class DemoMenu
    {
        public const string Prefix = "Demo";

        
        public static class Widgets
        {
            public const string Base = Prefix + ".Widgets";
        }
        
        public static class Dashboard
        {
            public const string Base = Prefix + ".Dashboard"; 
            public const string Dashboard1 = Base + ".Dashboard1";
            public const string Dashboard2 = Base + ".Dashboard2";
        }
        
        public static class Components
        {
            public const string Base = Prefix + ".Components";
            
            public const string Alerts = Base + ".Alerts";
            public const string Badges = Base + ".Badges";
            public const string Borders = Base + ".Borders";
            public const string Breadcrumbs = Base + ".BreadCrumbs";
            public const string Buttons = Base + ".Buttons"; 
            public const string ButtonGroups = Base + ".ButtonGroups"; 
            public const string Cards = Base + ".Cards";
            public const string Collapse = Base + ".Collapse";
            public const string Accordions = Base + ".Accordions";
            public const string Dropdowns = Base + ".Dropdowns";
            public const string ListGroups = Base + ".ListGroups";
            public const string Modals = Base + ".Modals";
            public const string Navs = Base + ".Navs";
            public const string Tabs = Base + ".Tabs"; 
            public const string Pagination = Base + ".Pagination";
            public const string Popovers = Base + ".Popovers";
            public const string Tooltips = Base + ".Tooltips";
            public const string Typography = Base + ".Typography";
            public const string Progress = Base + ".Progress"; 
            public const string Icons = Base + ".Icons";  
            public const string Charts = Base + ".Charts";
            public const string Carousel = Base + ".Carousel";
        }
        
        public static class Tables
        {
            public const string Base = Prefix + ".Tables";
            public const string BasicTables = Base + ".Tables";
            public const string DataTables = Base + ".DataTables";
        }
        
        public static class Libraries
        {
            public const string Base = Prefix + ".Libraries";
            
            public const string Colors = Base + ".Colors";
            public const string Spinners = Base + ".Spinners";
            public const string Lists = Base + ".Lists"; 
            public const string Timeline = Base + ".Timeline";
            public const string Navbars = Base + ".Navbars";
            public const string Head = Base + ".Head";
            public const string Iconbox = Base + ".Iconbox";
            public const string CustomScroll = Base + ".CustomScroll";
            public const string JsTree = Base + ".JsTree";
            public const string Toastr = Base + ".Toastr";
            public const string SweetAlert = Base + ".SweetAlert";
            public const string SessionTimeout = Base + ".SessionTimeout";
            public const string IdleTimer = Base + ".IdleTimer";
        }
        
        public static class CustomPages
        {
            public const string Base = Prefix + ".CustomPages";
            
            public const string Blog = Base + ".Blog";
            public const string Pricing = Base + ".Pricing";
            public const string Invoices = Base + ".Invoices";
            public const string FAQs = Base + ".FAQs";
            public const string UserPages = Base + ".UserPages";
            
            public static class ErrorPages
            {
                public const string Base = CustomPages.Base + ".CustomPages";
                
                public const string ErrorPage401 = Base + ".ErrorPage401";
                public const string ErrorPage403 = Base + ".ErrorPage403";
                public const string ErrorPage404 = Base + ".ErrorPage404";
                public const string ErrorPage500 = Base + ".ErrorPage500";
            }
        }
        
        public static class Forms
        {
            public const string Base = Prefix + ".Forms";
            
            public static class Controls
            {
                public const string Base = Forms.Base + ".Controls";
                
                public const string BaseInputs = Base + ".BaseInputs";
                public const string InputGroups = Base + ".InputGroups";
                public const string Checkbox = Base + ".Checkbox";
                public const string Radio = Base + ".Radio";
                public const string Switch = Base + ".Switch";
                public const string Options = Base + ".Options";
            }
            
            public static class Plugins
            {
                public const string Base = Forms.Base + ".Plugins";
                
                public static class TimeData
                {
                    public const string Base = Plugins.Base + ".TimeDate";
                    
                    public const string Datepicker = Base + ".Datepicker";
                    public const string Datetimepicker = Base + ".Datetimepicker";
                    public const string Timepicker = Base + ".Timepicker";
                    public const string Daterangepicker = Base + ".Daterangepicker";
                }
                
                public const string Touchspin = Base + ".Touchspin";
                public const string Maxlength = Base + ".Maxlength";
                public const string MultipleSelectSplitter = Base + ".MultipleSelectSplitter";
                public const string BootstrapSelect = Base + ".BootstrapSelect";
                public const string Typehead = Base + ".Typehead";
                public const string noUiSlider = Base + ".noUiSlider";
                public const string InputMasks = Base + ".InputMasks";
                public const string Summernote = Base + ".Summernote";
                public const string Markdown = Base + ".Markdown";
                public const string Autosize = Base + ".Autosize";
                public const string Clipboard = Base + ".Clipboard";
                public const string Dropzone = Base + ".Dropzone";
                public const string GoogleReCaptcha = Base + ".GoogleReCaptcha";
            }
            
            public static class Layouts
            {
                public const string Base = Forms.Base + ".Layouts";
                
                public const string Basic = Base + ".Basic";
                public const string MultiColumn = Base + ".MultiColumn";
                public const string BasicActionBar = Base + ".BasicActionBar";
                public const string StickyActionBar = Base + ".StickyActionBar";
                public const string FormRepeater = Base + ".FormRepeater";
            }
            
            public static class Validation
            {
                public const string Base = Forms.Base + ".Validation";
                
                public const string States = Base + ".States";
                public const string ValControls = Base + ".ValControls";
                public const string ValWidgets = Base + ".ValWidgets";
            }
        }
        
        public static class Main
        {
            public const string Settings = Prefix + ".Settings";
                public const string VisualSettings = Settings + ".VisualSettings";
                    public const string ColorThemes = VisualSettings + ".ColorThemes";
                    public const string LayoutSettings = VisualSettings + ".LayoutSettings";
                public const string GlobalSettings = Settings + ".GlobalSettings";
                    public const string Users = GlobalSettings + ".Users";
                    public const string Roles = GlobalSettings + ".Roles";
                    public const string Permissions = GlobalSettings + ".Permissions";
                public const string SystemSettings = Settings + ".SystemSettings";
                public const string LanguageSwitch = Settings + ".LanguageSwitch";
                public const string Directions = Settings + ".Directions";

            public const string TagHelpers = Prefix + ".TagHelpers";
        }
    }
}
