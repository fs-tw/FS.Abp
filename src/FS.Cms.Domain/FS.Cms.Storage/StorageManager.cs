using FS.Abp.CodingManagement.Coding;
using FS.Abp.Core.Files;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Services;

namespace FS.Cms.Storage
{
    public class StorageManager : DomainService, IStorageManager
    {

        public string FilesNo = "Files";
        public string FoldersNo = "Folders";

        private ICodingStore _codingStore;
        public ICodingStore CodingStore => LazyGetRequiredService(ref _codingStore);
        
        /*
            no：檔案路徑+檔名
            displayName：檔名
         */


        public async Task<List<Codes>> GetFiles() 
        {
            var definition = await this.CodingStore.Codes.GetDefinitionAsync(CmsDefinition.CmsStorageDefinition);
            var fileCode = definition.CodeList.Where(x => x.No == FilesNo).FirstOrDefault();

            return definition.CodeList.Where(x => x.Code.StartsWith(fileCode.Code + ".")).ToList();
        }


        public async Task CreateCodeFile(FileChangedEvent input)
        {
            //todo 建立資料夾
            var definition = await this.CodingStore.Codes.GetDefinitionAsync(CmsDefinition.CmsStorageDefinition);
            var fileCode = definition.CodeList.Where(x => x.No == FilesNo).FirstOrDefault();

            var name = input.Name.Split("\\").Last();
            var fileNo = input.Name.Replace("\\", "%5C");
            var check = this.CodingStore.Codes.Where(x => x.No == fileNo).FirstOrDefault();

            if (check == null)
            {
                var entity = new Codes()
                {
                    ParentId = fileCode.Id,
                    DefinitionId = definition.Id,
                    DisplayName = name,
                    Description = input.FileSizeStr,
                    No = fileNo,
                    Enable = false,
                    TenantId = CurrentTenant.Id
                };
                await this.CodingStore.Codes.InsertAsync(entity,true).ConfigureAwait(false);
            }
            else 
            {
                check.Description = input.FileSizeStr;
                await this.CodingStore.Codes.UpdateAsync(check, true).ConfigureAwait(false);
            }
           
        }

        public async Task DeleteCodeFile(string FileName)
        {
            var target = this.CodingStore.Codes.Where(x => x.No == FileName).FirstOrDefault();
            if (target != null) await this.CodingStore.Codes.DeleteAsync(target).ConfigureAwait(false);
        }

        public async Task<Boolean> CheckDeleteFile(string FileName)
        {
            var target = this.CodingStore.Codes.Where(x => x.No == FileName).FirstOrDefault();
            return target.Enable;
        }

        public async Task SetStorageLock()
        {

        }
    }
}
