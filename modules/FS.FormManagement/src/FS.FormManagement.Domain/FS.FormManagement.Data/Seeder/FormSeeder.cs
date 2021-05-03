//using FS.Abp.VirtualFileSystem;
//using FS.FormManagement.Forms;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Volo.Abp.Data;
//using Volo.Abp.DependencyInjection;
//using Volo.Abp.Domain.Entities;
//using Volo.Abp.Guids;

//namespace FS.FormManagement.Data.Seeder
//{
//    public class FormSeeder : ITransientDependency
//    {
//        public IGuidGenerator _guidGenerator { get; set; }
//        public IVirtualFileJsonReader virtualJsonReader { get; set; }

//        public IFormsStore _formsStore { get; set; }

//        /// <summary>
//        /// 讀取JSON來匯入資料到資料庫，格式請參考DEMO專案
//        /// </summary>
//        /// <param name="context"></param>
//        /// <param name="virtualFileJsonPath">json檔虛擬檔案路徑</param>
//        /// <returns></returns>
//        public async Task SeedAsync(DataSeedContext context, string virtualFileJsonPath)
//        {
//            try
//            {
//                List<Form> formals = readFormalAndGroupAndItem(virtualFileJsonPath);

//                setupFormalAndGroupAndItem(context, formals);

//                await insertAllDataAsync(formals);
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine("[FormSeeder]匯入資料到資料庫失敗");
//                throw ex;
//            }
//        }

//        private List<Form> readFormalAndGroupAndItem(string virtualFilePath)
//        {
//            try
//            {
//                var formals = virtualJsonReader.ReadJson<List<Form>>(virtualFilePath);
//                return formals;
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine($"讀取{virtualFilePath}時發生錯誤");
//                throw ex;
//            }
//        }

//        private void setupFormalAndGroupAndItem(DataSeedContext context, List<Form> formals)
//        {
//            foreach (var formal in formals)
//            {
//                formal.TenantId = context.TenantId;

//                setupGroupAndItemRecursively(context, formal, null, formal.Groups);
//            }
//        }

//        private void setupGroupAndItemRecursively(DataSeedContext context, Form formal, Group parentGroup, ICollection<Group> ChildGroups)
//        {
//            foreach (var childGroup in ChildGroups)
//            {
//                childGroup.Form = formal;
//                childGroup.TenantId = context.TenantId;

//                childGroup.Parent = parentGroup;

//                setupGroupItem(childGroup);

//                if (childGroup.Children.Any()) setupGroupAndItemRecursively(context, formal, childGroup, childGroup.Children);
//            }
//        }

//        private void setupGroupItem(Group group)
//        {
//            foreach (var item in group.Items)
//            {
//                item.GroupId = group.Id;
//                EntityHelper.TrySetId(item, _guidGenerator.Create);
//            }
//        }

//        private async Task insertAllDataAsync(List<Form> formals)
//        {
//            var roots = formals.SelectMany(x => x.Groups).Where(x => x.ParentId == null).ToList();

//            //基於某種理由，這裡不clear,insert 會失敗
//            formals.ForEach(x => x.Groups.Clear());

//            //insert group，其他就會因為關聯一起被加進去，而挑選group是為了讓Repository會處理Group的樹狀結構
//            foreach (var root in roots)
//            {
//                await _formsStore.Group.InsertAsync(root, true);
//            }
//        }
//    }
//}