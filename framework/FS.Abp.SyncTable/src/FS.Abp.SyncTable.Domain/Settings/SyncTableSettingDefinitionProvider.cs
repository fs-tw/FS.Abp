using Microsoft.Extensions.Options;
using Volo.Abp.Settings;
using System.Linq;
using System;
using System.Data.SqlTypes;

namespace FS.Abp.SyncTable.Settings;

public class SyncTableSettingDefinitionProvider : SettingDefinitionProvider
{
    private readonly SyncTableOptions options;

    public SyncTableSettingDefinitionProvider(
        IOptions<SyncTableOptions> options
        )
    {
        this.options=options.Value;
    }
    public override void Define(ISettingDefinitionContext context)
    {
        options.DbProfiles.ToList().ForEach(p =>
        {
            context.Add(new SettingDefinition(
                p.Value.LatestTimeSettingKey,
                isVisibleToClients: true,
                defaultValue: SqlDateTime.MinValue.Value.ToString("yyyy/MM/dd HH:mm:ss")
                ));
        });


        /* Define module settings here.
         * Use names from SyncTableSettings class.
         */
    }
}
