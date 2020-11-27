using FS.Cms.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Users;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsAppService : CmsAppService, IStorageAppService
    {

        public async Task<List<StorageDto>> GetFile() 
        {
            var codes = await this.StorageManager.GetFiles();
            List<StorageDto> output = new List<StorageDto>();
            foreach (var x in codes) 
            {
                var fileUrl = FileManager.GetFileApiUrl(x.No);
                using (currentCodes.Change(x.Id))
                {
                    var settings = storageDefinitionSettingFactory.Value;
                    var userName = "";
                    if (!settings.UserId.IsNullOrEmpty()) 
                    {
                        var user = await this.UserManager.FindByIdAsync(settings.UserId);
                        userName = user.UserName;
                    }
                    var data = new StorageDto()
                    {
                        FileName = x.DisplayName,
                        FileUrl = fileUrl,
                        Id = x.Id,
                        CreationTime = x.LastModificationTime.HasValue ? x.LastModificationTime.Value : x.CreationTime,
                        FileSizeStr = x.Description,
                        IsLock = settings.IsLock,
                        LockUserId = settings.UserId,
                        UserName = userName
                    };
                    output.Add(data);
                }               
            }           

            return output.OrderByDescending(x => x.CreationTime).ToList(); ;
        }

        public async Task<StorageLockDto> CheckDeleteFile(string fileName)
        {
            var code = this.CodingStore.Codes.Where(x => x.No.Equals(fileName)).FirstOrDefault();
            if (code == null) throw new UserFriendlyException("沒有此檔案！");
            using (currentCodes.Change(code.Id))
            {
                var settings = storageDefinitionSettingFactory.Value;
                return new StorageLockDto()
                {
                    IsLock = settings.IsLock
                };
            }            
        }


        public async Task SetFileLock(PutStorageLockDto input, string fileName)
        {
            var code = this.CodingStore.Codes.Where(x => x.No.Equals(fileName)).FirstOrDefault();
            string userId = currentUser.Id.ToString();
            List<Volo.Abp.Settings.SettingValue> settingValues = new List<Volo.Abp.Settings.SettingValue>()
            {
                new Volo.Abp.Settings.SettingValue() { Name = CmsSettingNames.StorageDefinitionSetting.UserId, Value = input.SetLock?userId:"" },
                new Volo.Abp.Settings.SettingValue() { Name = CmsSettingNames.StorageDefinitionSetting.IsLock, Value = input.SetLock.ToString() },
            };
         
            using (currentCodes.Change(code.Id))
            {
                var settings = storageDefinitionSettingFactory.Value;
                if (!settings.UserId.IsNullOrEmpty() && !userId.Equals(settings.UserId)) throw new UserFriendlyException("你沒有權限！");
            }

            await this.CodingStore.UpdateCodeSetting(code.Id, settingValues);

        }

    }
}
