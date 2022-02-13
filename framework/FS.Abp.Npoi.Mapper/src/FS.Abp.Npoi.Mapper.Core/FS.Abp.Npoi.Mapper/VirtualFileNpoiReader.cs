using FS.Abp.Npoi.Mapper.Attributes;
using Npoi.Mapper;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using Volo.Abp;

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

        public List<string> GetSheetNames(string filePath)
        {
            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return null;
            global::Npoi.Mapper.Mapper mapper = new global::Npoi.Mapper.Mapper(file.CreateReadStream());

            return Enumerable.Range(0, mapper.Workbook.NumberOfSheets).Select(s => mapper.Workbook.GetSheetAt(s).SheetName).ToList();
        }

        public List<T> Read<T>(string filePath = null, string sheetName = null)
            where T : class, new()
        {
            var mapToVirtualFileAttribute = FS.Abp.Attributes.AttributeHelper.Find<MapToVirtualFileAttribute>(typeof(T));//TypeDescriptor.GetAttributes(typeof(MapToVirtualFileAttribute)).OfType<MapToVirtualFileAttribute>().FirstOrDefault();
            if (mapToVirtualFileAttribute!=null)
            {
                filePath=mapToVirtualFileAttribute.FilePath;
                sheetName=mapToVirtualFileAttribute.SheetName;
            }

            Check.NotNullOrWhiteSpace(filePath, nameof(filePath));
            Check.NotNullOrWhiteSpace(sheetName, nameof(sheetName));


            var file = _virtualFileProvider.GetFileInfo(filePath);
            if (!file.Exists)
                return null;
            global::Npoi.Mapper.Mapper mapper = new global::Npoi.Mapper.Mapper(file.CreateReadStream());
            filterEmptyRows(mapper, sheetName);
            List<T> sheet = mapper.Take<T>(sheetName).Select(x => x.Value).ToList();
            return sheet;

            static void filterEmptyRows(global::Npoi.Mapper.Mapper mapper, string sheetName)
            {
                var sheet = mapper.Workbook.GetSheet(sheetName);
                var emptyRows = getEmpryRows(sheet);
                foreach (var row in emptyRows) sheet.RemoveRow(row);
            }
            static List<IRow> getEmpryRows(ISheet sheet)
            {
                var emptyRows = new List<IRow>();
                var rowEnumerator = sheet.GetRowEnumerator();

                while (rowEnumerator.MoveNext())
                {
                    var row = rowEnumerator.Current as IRow;

                    if (row.All(cell => cell.CellType == CellType.Blank))
                    {
                        emptyRows.Add(row);
                    }
                }

                return emptyRows;
            }
        }
    }

    public partial class VirtualFileNpoiReader
    {
        public List<T> ReadToTreeNode<T>(string filePath = null, string sheetName = null)
            where T : ITreeNode<T>, new()
        {
            var attribute = FS.Abp.Attributes.AttributeHelper.Find<LevelStartAtAttribute>(typeof(T));
            if (attribute == null) throw new Exception($"{typeof(T).Name} should has LevelStartAtAttribute");
            var levelIndex = attribute.Index;

            var mapToVirtualFileAttribute = FS.Abp.Attributes.AttributeHelper.Find<MapToVirtualFileAttribute>(typeof(T));//TypeDescriptor.GetAttributes(typeof(MapToVirtualFileAttribute)).OfType<MapToVirtualFileAttribute>().FirstOrDefault();
            if (mapToVirtualFileAttribute!=null)
            {
                filePath=mapToVirtualFileAttribute.FilePath;
                sheetName=mapToVirtualFileAttribute.SheetName;
            }

            Check.NotNullOrWhiteSpace(filePath, nameof(filePath));
            Check.NotNullOrWhiteSpace(sheetName, nameof(sheetName));

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
            var rows = dtTable.AsEnumerable().AsEnumerable();

            var list = rows.Select(x =>
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
                node.Children = new List<T>();
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
                check(n, sheet, availableParents);
                list.Single(t => t.Code == parentCode).Children.Add(n);
            });

            return result;
        }

        private void check<T>(T n, ISheet sheet, IEnumerable<T> availableParents) where T : ITreeNode<T>, new()
        {
            if (availableParents.Count() == 0)
            {
                throw new Exception($"找不到上層節點，節點:{n.ToString()},位於：{sheet.SheetName} 工作簿。");

            }
            if (availableParents.Count() > 1)
            {
                throw new Exception($"找到多個上層節點，節點:{n.ToString()},位於：{sheet.SheetName} 工作簿。");

            }
        }
    }
}