using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WB.Models
{
    public class 分析結果Info
    {
        public string 車牌 { get; set; }
        public string 日期 { get; set; }
        public int 過磅總重 { get; set; }
        public int 過磅空重 { get; set; }
        public int 過磅淨重 { get; set; }
        public int 第一次過磅 { get; set; }
        public int 第二次過磅 { get; set; }
        public int 日誌淨重 { get; set; }
        public string 出廠時間 { get; set; }
        public int 淨重差額 { get; set; }

    }
}
