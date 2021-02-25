using System;
using System.Linq;
using Volo.Abp.DependencyInjection;
using FS.Wbm.Core;
using System.Collections.Generic;
using Newtonsoft.Json;
using WB.Models;
using Npoi.Mapper;

namespace WB
{
    public enum 分析判斷
    {
        正常,
        多收,
        少收
    }
    public enum 過磅次
    {
        一次 = 0,
        二次 = 1
    }
    public class 過磅Model
    {
        public 過磅 過磅 { get; set; }
        public string GroupKey
        {
            get
            {
                return $"{過磅.出廠日期.ToShortDateString()}-{過磅.車牌號碼.Trim()}";
            }
        }
        public 過磅Model(過磅 過磅)
        {
            this.過磅 = 過磅;
        }
    }
    public class 過磅記錄Model
    {
        public 過磅記錄 過磅記錄 { get; set; }

        public int 計價重
        {
            get
            {
                var outW = this.過磅記錄.出廠重.HasValue ? this.過磅記錄.出廠重.Value : 0;
                return this.過磅記錄.磅重 - outW;
            }
        }
        public string GroupKey
        {
            get
            {
                return $"{過磅記錄.日期.ToShortDateString()}-{過磅記錄.車號.Trim()}";
            }
        }
        public 過磅記錄Model(過磅記錄 過磅記錄)
        {
            this.過磅記錄 = 過磅記錄;
        }
    }
    public class 過磅日誌Model
    {
        public 過磅日誌 過磅日誌 { get; set; }
        public string 車牌 { get; set; }
        public 過磅次 過磅次 { get; set; }
        public int 重 { get; set; }
        public DateTime DateTime
        {
            get
            {
                return new DateTime(
                    過磅日誌.日期.Year, 過磅日誌.日期.Month, 過磅日誌.日期.Day,
                    過磅日誌.時間.Hour, 過磅日誌.時間.Minute, 過磅日誌.時間.Second);
            }
        }
        public string GroupKey
        {
            get
            {
                return $"{過磅日誌.日期.ToShortDateString()}-{車牌}";
            }
        }

        public 過磅日誌Model(過磅日誌 過磅日誌)
        {
            this.過磅日誌 = 過磅日誌;
            var texts = 過磅日誌.內容.Split(" ").Where(x => !string.IsNullOrEmpty(x)).ToList();
            if (texts.Count == 3)
            {
                車牌 = texts[0];
                過磅次 = texts[1].StartsWith("第一次") ? 過磅次.一次 : 過磅次.二次;
                重 = int.Parse(texts[2]);
            }
            if (texts.Count == 4)
            {
                車牌 = texts[1];
                過磅次 = texts[2].StartsWith("第一次") ? 過磅次.一次 : 過磅次.二次;
                重 = int.Parse(texts[3]);
            }
            
            

        }
    }
    public class 過磅日誌Pair
    {
        public 過磅日誌Pair()
        {
        }
        public 過磅日誌Model 一次過磅日誌 { get; set; }
        public 過磅日誌Model 二次過磅日誌 { get; set; }

        public int 計價重
        {
            get
            {
                return Math.Abs(一次過磅日誌.重 - 二次過磅日誌.重);
            }
        }

    }
    public class 分析結果
    {
        public 過磅日誌Pair 過磅日誌Pair { get; set; }
        public 過磅記錄Model 過磅記錄Model { get; set; }
        public 過磅Model 過磅Model { get; set; }

        public 分析結果(過磅日誌Pair 過磅日誌Pair, 過磅記錄Model 過磅記錄Model, 過磅Model 過磅Model)
        {
            this.過磅日誌Pair = 過磅日誌Pair;
            this.過磅記錄Model = 過磅記錄Model;
            this.過磅Model = 過磅Model;
        }
        public bool 正常
        {
            get
            {
                return 過磅日誌Pair.計價重 == 過磅記錄Model.計價重;
            }
        }
        public 分析判斷 分析判斷
        {
            get
            {
                if (過磅日誌Pair.計價重 == 過磅Model.過磅.過磅淨重) return 分析判斷.正常;
                return 過磅日誌Pair.計價重 < 過磅Model.過磅.過磅淨重 ? 分析判斷.多收 : 分析判斷.少收;
            }
        }



        public string 車牌
        {
            get
            {
                return 過磅Model.過磅.車牌號碼;
            }
        }
        public string 日期
        {
            get
            {
                return 過磅Model.過磅.出廠日期.ToShortDateString();
            }
        }
        public int 過磅總重
        {
            get
            {
                return 過磅Model.過磅.過磅總重;
            }
        }
        public int 過磅空重
        {
            get
            {
                return 過磅Model.過磅.過磅空重;
            }
        }
        public int 過磅淨重
        {
            get
            {
                return 過磅Model.過磅.過磅淨重;
            }
        }
        public int 第一次過磅
        {
            get
            {
                return this.過磅日誌Pair.一次過磅日誌.重;
            }
        }

        public int 第二次過磅
        {
            get
            {
                return this.過磅日誌Pair.二次過磅日誌.重;
            }
        }
        public int 日誌淨重
        {
            get
            {
                return Math.Abs(this.第一次過磅 - this.第二次過磅);
            }
        }
        public string 出廠時間
        {
            get
            {
                return this.過磅Model.過磅.出廠時間.ToShortTimeString();
            }
        }

        public int 淨重差額
        {
            get
            {
                return 過磅淨重 - 日誌淨重;
            }
        }

    }
    public class 過磅分析
    {

        public string 車牌 { get; set; }
        public string 日期 { get; set; }
        public 過磅分析()
        {
            過磅日誌s = new List<過磅日誌Model>();
            過磅記錄s = new List<過磅記錄Model>();
            過磅s = new List<過磅Model>();
        }
        public List<過磅日誌Pair> 過磅日誌Pairs
        {
            get
            {
                List<過磅日誌Pair> result = new List<過磅日誌Pair>();
                var queue = new Queue<過磅日誌Model>(過磅日誌s);

                var pair = new 過磅日誌Pair();
                while (queue.Count > 0)
                {
                    var item = queue.Dequeue();
                    if (item.過磅次 == 過磅次.一次)
                    {
                        pair.一次過磅日誌 = item;
                    }
                    if (item.過磅次 == 過磅次.二次)
                    {
                        pair.二次過磅日誌 = item;
                    }
                    if (pair.一次過磅日誌 != null && pair.二次過磅日誌 != null)
                    {
                        result.Add(pair);
                        pair = new 過磅日誌Pair();
                    }
                }

                return result;
            }
        }
        public List<過磅日誌Model> 過磅日誌s { get; set; }
        public List<過磅記錄Model> 過磅記錄s { get; set; }
        public List<過磅Model> 過磅s { get; set; }

        public bool 可分析
        {
            get
            {
                return 過磅日誌Pairs.Count() == 過磅記錄s.Count();
            }
        }

        public List<分析結果> 分析結果
        {
            get
            {
                var result = 過磅日誌Pairs.Zip(過磅記錄s)
                    .Select(x => new { P = x.First, R = x.Second })
                    .Zip(過磅s).Select(y => new 分析結果(y.First.P, y.First.R, y.Second)).ToList();
                return result;
            }
        }




    }
    public class HelloWorldService : Volo.Abp.Domain.Services.DomainService, ITransientDependency
    {
        public I過磅日誌Repository 過磅日誌Repository => LazyServiceProvider.LazyGetRequiredService<I過磅日誌Repository>();
        public I過磅記錄Repository 過磅記錄Repository => LazyServiceProvider.LazyGetRequiredService<I過磅記錄Repository>();
        public I過磅Repository 過磅Repository => LazyServiceProvider.LazyGetRequiredService<I過磅Repository>();

        public Volo.Abp.AuditLogging.IAuditLogRepository LogRepository => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.AuditLogging.IAuditLogRepository>();

        public Volo.Abp.Uow.IUnitOfWorkManager UnitOfWorkManager => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Uow.IUnitOfWorkManager>();

        public Volo.Abp.ObjectMapping.IObjectMapper ObjectMapper => LazyServiceProvider.LazyGetRequiredService<Volo.Abp.ObjectMapping.IObjectMapper>();
        public async System.Threading.Tasks.Task SayHelloAsync()
        {
            await SaveExcelAsync(new DateTime(2013, 1, 1), new DateTime(2021, 3, 1));

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

                var es = await 過磅日誌Repository.GetByAsync(startDate, endDate);


                Func<過磅日誌, bool> normal = e => e.內容.Split(" ").Where(x => !string.IsNullOrEmpty(x)).Count() == 3;
                var errorCount = es.Where(x => !normal.Invoke(x)).Count();
                Console.WriteLine($"{errorCount} 筆資料被排除,split失敗");

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


                var rs = await 過磅記錄Repository.GetByAsync(startDate, endDate);
                var 過磅記錄Models = rs
                    //.Where(x => x.車號.Trim() == "KEB9599")
                    .Select(x => new 過磅記錄Model(x))
                    .ToList();

                過磅記錄Models.ForEach(x =>
                {
                    var group = allDatas.GetOrAdd(x.GroupKey, () =>
                    {
                        return new 過磅分析()
                        {
                            日期 = x.過磅記錄.日期.ToShortDateString(),
                            車牌 = x.過磅記錄.車號.Trim()
                        };
                    });
                    group.過磅記錄s.Add(x);
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


        //Console.WriteLine("Hello World!");
    }
}

