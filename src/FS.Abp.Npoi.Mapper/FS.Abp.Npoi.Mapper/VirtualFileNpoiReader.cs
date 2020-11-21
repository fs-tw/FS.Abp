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
    public partial class VirtualFileNpoiReader : IVirtualFileNpoiReader
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
        /// <returns></returns>
        //public List<TreeNode> ReadToTreeNode(string filePath, string sheetName)
        //{
        //    var file = _virtualFileProvider.GetFileInfo(filePath);
        //    if (!file.Exists)
        //        return null;
        //    DataTable dtTable = new DataTable();
        //    List<string> rowList = new List<string>();
        //    ISheet sheet;
        //    Options options = null;
        //    using (var stream = file.CreateReadStream())
        //    {
        //        stream.Position = 0;
        //        IWorkbook xssWorkbook = WorkbookFactory.Create(stream);
        //        sheet = xssWorkbook.GetSheet(sheetName);
        //        options = getOptions(sheet);

        //        IRow headerRow = sheet.GetRow(0);
        //        int cellCount = headerRow.LastCellNum;
        //        for (int j = 0; j < cellCount; j++)
        //        {
        //            ICell cell = headerRow.GetCell(j);
        //            if (cell == null || string.IsNullOrWhiteSpace(cell.ToString())) continue;
        //            {
        //                dtTable.Columns.Add(cell.ToString());
        //            }
        //        }

        //        for (int i = options.DataStartIndex; i <= sheet.LastRowNum; i++)
        //        {
        //            IRow row = sheet.GetRow(i);
        //            if (row == null) continue;
        //            if (string.IsNullOrEmpty(row.GetCell(options.LevelStartIndex)?.ToString())) continue;
        //            for (int j = 0; j < cellCount; j++)
        //            {
        //                rowList.Add(row.GetCell(j)?.ToString());
        //            }
        //            if (rowList.Count > 0)
        //                dtTable.Rows.Add(rowList.ToArray());
        //            rowList.Clear();
        //        }
        //    }
        //    var list = dtTable.AsEnumerable().Select(x =>
        //    {
        //        var node = new TreeNode();
        //        if (x.Table.Columns.Contains("DisplayName"))
        //        {
        //            node.DisplayName = x.Field<string>("DisplayName");
        //        }
        //        if (x.Table.Columns.Contains("Description"))
        //        {
        //            node.Description = x.Field<string>("Description");
        //        }

        //        node.No = x.Table.Columns.Contains("No") ? x.Field<string>("No") : node.DisplayName;

        //        var codes = x.ItemArray
        //        .Skip(options.LevelStartIndex)
        //        .Select(o => o?.ToString()?.PadLeft(4, '0') ?? "0000")
        //        .Where(o => o != "0000");
        //        node.Code = string.Join(".", codes);
        //        return node;
        //    }).OrderBy(x => x.Code).ToList();

        //    var result = new List<TreeNode>();

        //    list.ForEach(n =>
        //    {
        //        if (n.Code.IndexOf('.') == -1)//root
        //        {
        //            result.Add(n);
        //            return;
        //        }

        //        var parentCode = n.Code.Substring(0, n.Code.LastIndexOf('.'));
        //        list.Single(t => t.Code == parentCode).Children.Add(n);
        //    });


        //    return result;
        //}



    }

    public partial class VirtualFileNpoiReader
    {
        public List<T> ReadToTreeNode<T>(string filePath, string sheetName)
            where T : ITreeNode<T>, new()
        {
            var attribute = Volo.Abp.Reflection.ReflectionHelper.GetSingleAttributeOrDefault<Npoi.Mapper.Attributes.LevelStartAtAttribute>(typeof(T));
            if (attribute == null) throw new Exception($"{typeof(T).Name} should has LevelStartAtAttribute");
            var levelIndex = attribute.Index;

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
                    if (string.IsNullOrEmpty(row.GetCell(levelIndex)?.ToString())) continue;
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
                var node = new T();
                typeof(T).GetProperties().ForEach(p =>
                {
                    var attribute = Volo.Abp.Reflection.ReflectionHelper.GetSingleAttributeOrDefault(p, new global::Npoi.Mapper.Attributes.ColumnAttribute(p.Name));
                    if (x.Table.Columns.Contains(attribute.Name))
                    {
                        p.SetValue(node, x.Field<string>(attribute.Name));
                    }
                });
                var codes = x.ItemArray
                .Skip(levelIndex)
                .Select(o => o?.ToString()?.PadLeft(4, '0') ?? "0000")
                .Where(o => o != "0000");
                node.Code = string.Join(".", codes);
                return node;
            }).OrderBy(x => x.Code).ToList();

            var result = new List<T>();

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
