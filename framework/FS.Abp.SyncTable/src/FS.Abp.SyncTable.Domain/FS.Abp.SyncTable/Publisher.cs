using Dapper;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FS.Abp;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.Settings;
using Volo.Abp.SettingManagement;
using FS.Abp.Data;
using System.Globalization;
using System.Reflection;

namespace FS.Abp.SyncTable
{
    public class Publisher : Volo.Abp.DependencyInjection.ISingletonDependency
    {
        private readonly IDbConnectionFactory dbConnectionFactory;
        private readonly IDistributedEventBus eventBus;
        private readonly ISettingProvider settingProvider;
        private readonly ISettingManager settingManager;
        private readonly SyncTableOptions options;

        public Publisher(
            IDbConnectionFactory dbConnectionFactory,
            IOptions<SyncTableOptions> options,
            IDistributedEventBus eventBus,
            ISettingProvider settingProvider,
            ISettingManager settingManager
            )
        {
            this.dbConnectionFactory = dbConnectionFactory;
            this.eventBus = eventBus;
            this.settingProvider = settingProvider;
            this.settingManager = settingManager;
            this.options = options.Value;
        }

        public async Task ExecuteAsync()
        {
            await this.options.DbProfiles.ForEachAsync(async p =>
            {
                var dbProfile = p.Value;

                var now = DateTime.Now;

                var latestTime = await dbProfile.GetLatestTimeAsync(settingProvider);

                List<SyncTable> syncDatas = null;

                using (var connection = await dbConnectionFactory.CreateSqlConnectionAsync(dbProfile.Name))
                {
                    syncDatas = (await connection.QueryAsync<SyncTable>(
                        "select * from _SyncTables where ExecuteTime>=@executeTime order by ExecuteTime asc", new { executeTime = latestTime })).ToList();
                }

                await PublishAsync(dbProfile, syncDatas);

                await dbProfile.SetLatestTimeAsync(settingManager, now);
            });
        }

        protected async Task PublishAsync(SyncTableDbProfile dbProfile, List<SyncTable> syncDatas)
        {
            IEnumerable<(SyncTableProfile Profile, SyncTable SyncTable, object EtoObject)> pairs = syncDatas
              .Where(x => dbProfile.Profiles.ContainsKey(x.EntityType))
              .ToList()
              .SelectMany(d =>
              {
                  var profile = dbProfile.Profiles[d.EntityType];

                  var message = $"<Root>{d.Message}</Root>";

                  var xml = System.Xml.Linq.XDocument.Parse(message).DescendantNodes()
                  .Where(x => (x as System.Xml.Linq.XElement).Name.LocalName != "Root")
                    .ToList();

                  return xml
                    .Select(i =>
              {
                  var node = i as System.Xml.Linq.XElement;
                  var attributes = node.Attributes();
                  var result = Activator.CreateInstance(profile.EtoType);

                  profile.EtoType
                  .GetProperties()
                  .Where(p => attributes.Any(a => p.Name == a.Name))
                  .ToList()
                  .ForEach(p =>
                  {
                      var attribute = attributes.FirstOrDefault(a => a.Name == p.Name);

                      TypeCode typeCode = Type.GetTypeCode(p.PropertyType);

                      switch (typeCode)
                      {
                          case TypeCode.Object:
                              if (p.PropertyType == typeof(Guid))
                              {
                                  p.SetValue(result, Guid.Parse(attribute.Value));
                              }
                              if (p.PropertyType == typeof(DateTime?))
                              {
                                  safetySetDateTimeValue(result, p, attribute.Value);
                              }
                              break;

                          case TypeCode.Boolean:
                              p.SetValue(result, attribute.Value == "1");
                              break;

                          case TypeCode.DateTime:
                              safetySetDateTimeValue(result, p, attribute.Value);
                              break;

                          default:
                              p.SetValue(result, Convert.ChangeType(attribute.Value, p.PropertyType));
                              break;
                      }
                  });
                  return (profile, d, result);
              });
              }).ToList();

            await pairs.ForEachAsync(x =>
            {
                var entityEtoType = x.Profile.EtoType;

                Type etoType = null;

                switch (x.SyncTable.Event)
                {
                    case "Inserted":
                        etoType = typeof(EntityCreatedEventData<>).MakeGenericType(entityEtoType);
                        break;
                    case "Updated":
                        etoType = typeof(EntityUpdatedEventData<>).MakeGenericType(entityEtoType);
                        break;
                    case "Deleted":
                        etoType = typeof(EntityDeletedEventData<>).MakeGenericType(entityEtoType);
                        break;
                    default:
                        break;
                }

                var eto = Activator.CreateInstance(etoType, x.EtoObject);

                eventBus.PublishAsync(etoType, eto);

                return Task.CompletedTask;
            });

            var ids = pairs.Select(x => x.SyncTable.Id).ToList();
        }


        private void safetySetDateTimeValue(Object obj,PropertyInfo p ,string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                p.SetValue(obj, null);
            }
            else
            {

                p.SetValue(obj, DateTime.ParseExact(
                    value,
                    new string[] { "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm:ss.fff" }, CultureInfo.InvariantCulture,
                    DateTimeStyles.None));
            }

        }
    }
}
