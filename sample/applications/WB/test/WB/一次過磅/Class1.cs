using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WB.一次過磅
{
    public class 過磅分析
    {

        public string 車牌 { get; set; }
        public string 日期 { get; set; }
        public 過磅分析()
        {
            過磅日誌s = new List<過磅日誌Model>();
            過磅s = new List<過磅Model>();
        }
        public List<過磅日誌Model> 過磅日誌s { get; set; }
        public List<過磅Model> 過磅s { get; set; }

        public bool IsC
        {
            get 
            {
                return 過磅日誌s.Count == 過磅s.Count;
            }
        }

        public List<分析結果> 分析結果
        {
            get
            {
                var result = 過磅日誌s.Zip(過磅s)
                    .Select(x => new 分析結果(x.First, x.Second))
                    .ToList();
                return result;
            }
        }




    }
    public class 分析結果
    {
        public 過磅日誌Model 過磅日誌Model { get; set; }
        public 過磅Model 過磅Model { get; set; }

        public 分析結果(過磅日誌Model 過磅日誌Model, 過磅Model 過磅Model)
        {
            this.過磅日誌Model = 過磅日誌Model;
            this.過磅Model = 過磅Model;
        }
        public 分析判斷 分析判斷
        {
            get
            {
                if (過磅日誌Model.重 == 過磅Model.過磅.過磅總重) return 分析判斷.正常;
                return 過磅日誌Model.重 < 過磅Model.過磅.過磅總重 ? 分析判斷.多收 : 分析判斷.少收;
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
        public int 第一次過磅
        {
            get
            {
                return this.過磅日誌Model.重;
            }
        }
        public string 出廠時間
        {
            get
            {
                return this.過磅Model.過磅.出廠時間.ToShortTimeString();
            }
        }

        public int 差額
        {
            get
            {
                return 過磅總重 - 第一次過磅;
            }
        }

    }
    public class 分析結果Info
    {
        public 分析判斷 分析判斷 { get; set; }



        public string 車牌 { get; set; }
        public string 日期 { get; set; }
        public int 過磅總重 { get; set; }
        public int 第一次過磅 { get; set; }
        public string 出廠時間 { get; set; }

        public int 差額 { get; set; }

    }
}
