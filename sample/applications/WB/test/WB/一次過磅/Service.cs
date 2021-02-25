using FS.Wbm.Core;
using Npoi.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using WB.Models;

namespace WB.一次過磅
{
    public class Service : Volo.Abp.Domain.Services.DomainService, ITransientDependency
    {
        public I過磅日誌Repository 過磅日誌Repository => LazyServiceProvider.LazyGetRequiredService<I過磅日誌Repository>();
        public I過磅記錄Repository 過磅記錄Repository => LazyServiceProvider.LazyGetRequiredService<I過磅記錄Repository>();
        public I過磅Repository 過磅Repository => LazyServiceProvider.LazyGetRequiredService<I過磅Repository>();

        public Volo.Abp.AuditLogging.IAuditLogRepository LogRepository => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.AuditLogging.IAuditLogRepository>();

        public Volo.Abp.Uow.IUnitOfWorkManager UnitOfWorkManager => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Uow.IUnitOfWorkManager>();

        public Volo.Abp.ObjectMapping.IObjectMapper ObjectMapper => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.ObjectMapping.IObjectMapper>();
        public async System.Threading.Tasks.Task SayHelloAsync()
        {
            
            await SaveExcelAsync(new DateTime(2000, 1, 1), new DateTime(2017, 2, 21));

            //var endMonth = new DateTime(2021, 3, 1);


            //for (var startMonth = new DateTime(2013, 1, 1); startMonth < endMonth; startMonth = startMonth.AddMonths(1))
            //{
            //    var startDate = new DateTime(startMonth.Year, startMonth.Month, 1);
            //    var endDate = new DateTime(startMonth.Year, startMonth.Month, DateTime.DaysInMonth(startMonth.Year, startMonth.Month));
            //    await SaveExcelAsync(startDate, endDate);
            //}






        }

        private async System.Threading.Tasks.Task SaveExcelAsync(DateTime startDate, DateTime endDate)
        {
            using (var uow = UnitOfWorkManager.Begin(new Volo.Abp.Uow.AbpUnitOfWorkOptions()))
            {
                var allDatas = new Dictionary<string, 過磅分析>();

                var es = await 過磅日誌Repository.GetFirstAsync(startDate, endDate);

                Func<過磅日誌, bool> normal = e => {
                    var count = e.內容.Split(" ").Where(x => !string.IsNullOrEmpty(x)).Count();
                    return count == 3 || count == 4;
                };

                var 過磅日誌Models = es.Where(normal)
                    .Select(x => new 過磅日誌Model(x))
                    //.Where(x => x.車牌 == "KEB9599")
                    .ToList();


                過磅日誌Models.ForEach(x =>
                {
                    var group = allDatas.GetOrAdd(x.GroupKey, () =>
                    {
                        return new 過磅分析()
                        {
                            日期 = x.過磅日誌.日期.ToShortDateString(),
                            車牌 = x.車牌
                        };
                    });
                    group.過磅日誌s.Add(x);
                });

           

                var os = await 過磅Repository.GetByAsync(startDate, endDate);
                var 過磅Models = os
                    //.Where(x => x.車牌號碼.Trim() == "KEB9599" && x.出廠日期 == new DateTime(2020, 5, 29))
                    .Select(x => new 過磅Model(x))
                    .ToList();

                過磅Models.ForEach(x =>
                {
                    var group = allDatas.GetOrAdd(x.GroupKey, () =>
                    {
                        return new 過磅分析()
                        {
                            日期 = x.過磅.出廠日期.ToShortDateString(),
                            車牌 = x.過磅.車牌號碼.Trim()
                        };
                    });
                    group.過磅s.Add(x);
                });
                //過磅記錄Repository.GetByAsync(new DateTime(2020, 2, 1), new DateTime(2020, 3, 1));

                //var g = allDatas[$"{new DateTime(2020, 5, 29).ToShortDateString()}-KEB9599"];

                //var tg = g.分析結果;
                var aa=allDatas.Select(x=>x.Value).Select(x => x.IsC).Where(x=>x).Count();

                var tt = allDatas.ToList().SelectMany(x => x.Value.分析結果);

                var gg = tt
                    .Where(x => x.過磅Model.過磅.料品屬性.Contains("運入"))
                    //.Where(x => x.過磅記錄Model.過磅記錄.車號 == "772BR")
                    .ToList();

                var a = gg.Where(x => x.分析判斷 == 分析判斷.多收).ToList();
                var b = gg.Where(x => x.分析判斷 == 分析判斷.少收).ToList();

                var c = gg.Where(x => x.分析判斷 == 分析判斷.正常).ToList();


                var 多收Info = a.Select(x => ObjectMapper.Map<分析結果, 分析結果Info>(x)).ToList();
                var 少收Info = b.Select(x => ObjectMapper.Map<分析結果, 分析結果Info>(x)).ToList();
                var 正常Info = c.Select(x => ObjectMapper.Map<分析結果, 分析結果Info>(x)).ToList();

                if (多收Info.Count > 0 || 少收Info.Count > 0 || 正常Info.Count > 0)
                {
                    var mapper = new Mapper();
                    mapper.Put(多收Info, "多收", overwrite: true);
                    mapper.Put(少收Info, "少收", overwrite: true);
                    mapper.Put(正常Info, "正常", overwrite: true);
                    mapper.Save(@$"E:\Test\{startDate.ToString("yyyy_MM")}.xlsx");
                }


            };
        }
    }
}
