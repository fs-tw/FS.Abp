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
        private readonly IErrorHandler errorHandler;
        public VirtualFileNpoiReader(
            Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider,
            IErrorHandler errorHandler
            )
        {
            this._virtualFileProvider = virtualFileProvider;
            this.errorHandler = errorHandler;
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
    }

    public partial class VirtualFileNpoiReader
    {
        public List<T> ReadToTreeNode<T>(string filePath, string sheetName, List<T> errors = null)
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
                var availableParents = list.Where(t => t.Code == parentCode);
                var isExistParent = Validate(n, sheet, availableParents);
                if (isExistParent)
                {
                    list.Single(t => t.Code == parentCode).Children.Add(n);
                }

            });


            return result;
        }

        private bool Validate<T>(T n, ISheet sheet, IEnumerable<T> availableParents) where T : ITreeNode<T>, new()
        {
            if (availableParents.Count() == 0)
            {
                var errorInfo = new ErrorHandler.ErrorInfo()
                {
                    Message = $"找不到上層節點，名稱:{n.ToString()},位於：{sheet.SheetName} 工作簿。"
                };
                errorHandler.Add(errorInfo);
            }
            if (availableParents.Count() > 1)
            {
                var errorInfo = new ErrorHandler.ErrorInfo()
                {
                    Message = $"找到多個上層節點，名稱:{n.ToString()},位於：{sheet.SheetName} 工作簿。"
                };
                errorHandler.Add(errorInfo);
            }
            return availableParents.Count() == 1;
        }
    }

}
