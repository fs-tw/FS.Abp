using NPOI.SS.UserModel;
using Npoi.Mapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Data;
using System.IO;
using NPOI.XSSF.UserModel;

namespace FS.Abp.Npoi.Mapper
{
    public class TreeNode
    {
        public TreeNode()
        {
            Children = new List<TreeNode>();
        }
        public string No { get; set; }
        public string Code { get; set; }
        public string DisplayName { get; set; }

        public string Description { get; set; }

        public List<TreeNode> Children { get; set; }
    }
    public class VirtualFileNpoiReader : IVirtualFileNpoiReader
    {
        private readonly Volo.Abp.VirtualFileSystem.IVirtualFileProvider _virtualFileProvider;
        public VirtualFileNpoiReader(
          Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider

            )
        {
            this._virtualFileProvider = virtualFileProvider;
        }

        public List<T> Read<T>(string filePath, string sheetName)
            where T : class, new()
        {
            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return null;
            global::Npoi.Mapper.Mapper mapper = new global::Npoi.Mapper.Mapper(file.CreateReadStream());
            List<T> sheet = mapper.Take<T>(sheetName).Select(x => x.Value).ToList();
            return sheet;
        }

        /// <summary>
        /// TreeNode
        /// </summary>
        /// <param name="filePath">虛擬檔案路徑</param>
        /// <param name="sheetName">工作簿名稱</param>
        /// <param name="levelStartIndex">層次欄位開始位置(層次1)</param>
        /// <returns></returns>
        public List<TreeNode> ReadToTreeNode(string filePath, string sheetName, int levelStartIndex)
        {
            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return null;
            DataTable dtTable = new DataTable();
            List<string> rowList = new List<string>();
            ISheet sheet;
            using (var stream = file.CreateReadStream())
            {
                stream.Position = 0;
                IWorkbook xssWorkbook = WorkbookFactory.Create(stream);
                sheet = xssWorkbook.GetSheet(sheetName);
                IRow headerRow = sheet.GetRow(0);
                int cellCount = headerRow.LastCellNum;
                for (int j = 0; j < cellCount; j++)
                {
                    ICell cell = headerRow.GetCell(j);
                    if (cell == null || string.IsNullOrWhiteSpace(cell.ToString())) continue;
                    {
                        dtTable.Columns.Add(cell.ToString());
                    }
                }
                for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++)
                {
                    IRow row = sheet.GetRow(i);
                    if (row == null) continue;
                    for (int j = 0; j < cellCount; j++)
                    {
                        rowList.Add(row.GetCell(j)?.ToString());
                    }
                    if (rowList.Count > 0)
                        dtTable.Rows.Add(rowList.ToArray());
                    rowList.Clear();
                }
            }
            var list = dtTable.AsEnumerable().Select(x =>
            {
                var node = new TreeNode();
                node.DisplayName = x.Field<string>("DisplayName");
                if (x.Table.Columns.Contains("Description"))
                {
                    node.Description = x.Field<string>("Description");
                }
                
                node.No = string.IsNullOrEmpty(x.Field<string>("No")) ? node.DisplayName : x.Field<string>("No");

                var codes = x.ItemArray
                .Skip(levelStartIndex)
                .Select(o => o?.ToString()?.PadLeft(4, '0') ?? "0000")
                .Where(o => o != "0000");
                node.Code = string.Join(".", codes);
                return node;
            }).OrderBy(x => x.Code).ToList();

            var result = new List<TreeNode>();

            list.ForEach(n =>
            {
                if (n.Code.IndexOf('.') == -1)//root
                {
                    result.Add(n);
                    return;
                }

                var parentCode = n.Code.Substring(0, n.Code.LastIndexOf('.'));
                list.Single(t => t.Code == parentCode).Children.Add(n);
            });


            return result;
        }
    }
}
