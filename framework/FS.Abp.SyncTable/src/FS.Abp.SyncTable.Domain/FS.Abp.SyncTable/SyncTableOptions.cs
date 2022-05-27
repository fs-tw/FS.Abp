using FS.Abp.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.SettingManagement;

namespace FS.Abp.SyncTable
{
    public class SyncTableOptions
    {
        public Dictionary<string, SyncTableDbProfile> DbProfiles { get; set; }
        public SyncTableOptions()
        {
            this.DbProfiles = new Dictionary<string, SyncTableDbProfile>();
        }
    }

    public class SyncTableDbProfile
    {
        public string Name { get; set; }
        public DataAccessProviderTypes DataAccessProviderType { get; set; }
        public Dictionary<string, SyncTableProfile> Profiles { get; set; }
        protected string SettingKey
        {
            get
            {
                return $"SyncTable.{Name}";
            }
        }

        public SyncTableDbProfile(string name, DataAccessProviderTypes dataAccessProviderType)
        {
            this.Name=name;
            this.DataAccessProviderType=dataAccessProviderType;
            this.Profiles = new Dictionary<string, SyncTableProfile>();
        }

        public string LatestTimeSettingKey => $"{SettingKey}.LatestTime";

        public async Task<DateTime> GetLatestTimeAsync(Volo.Abp.Settings.ISettingProvider settingProvider)
        {
            var value = await settingProvider.GetOrNullAsync(LatestTimeSettingKey);
            return DateTime.Parse(value);
        }

        public async Task SetLatestTimeAsync(Volo.Abp.SettingManagement.ISettingManager settingManager, DateTime value)
        {
            await settingManager.SetGlobalAsync(LatestTimeSettingKey, value.ToString("yyyy/MM/dd HH:mm:ss"));
        }
    }

    public class SyncTableProfile
    {
        public string Name { get; set; }
        public Type EtoType { get; set; }


        public SyncTableProfile(
            string name, 
            Type etoType)
        {
            Name=name;
            EtoType=etoType;
        }


    }
}
