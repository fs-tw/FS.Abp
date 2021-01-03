using System.Threading.Tasks;

namespace FS.Abp.Line.Notify
{
    public interface ILineNotifyController
    {
        //產生登入Line的網址
        string AuthorizeUrl();
        //利用驗證後得到的code取得Token並存入Settings
        Task TokenAsync(string code);
        //發送訊息
        Task NotifyAsync(string message);
        
    }
}