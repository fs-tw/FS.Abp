namespace FS.Cms.Data.Model
{
    internal class BlogImportModel
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string ParentNo { get; set; }

        /// <summary>
        /// 是否可以更改，在excel此欄位填1就會被當成true
        /// </summary>
        public bool Static { get; set; }
    }
}