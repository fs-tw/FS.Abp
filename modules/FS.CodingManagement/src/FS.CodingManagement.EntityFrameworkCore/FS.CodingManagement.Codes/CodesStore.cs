
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.Codes
{
    public partial class CodesStore : DomainService, ICodesStore
    {
        public async Task<Coding> GenerateAsync(string providerName)
        {
            return null;
            //var data = await this.AsyncExecuter.SingleOrDefaultAsync(this.TransactionNo
            //    .Where(x => x.Date.Date == dateTime.Date && x.LaneId == laneId));

            //if (data == null)
            //{
            //    data = new TransactionNo()
            //    {
            //        No = 1,
            //        TransNo = isTrans ? 1 : 0, // 要產生收據取號 1,  不需收據則不產生編號
            //        Date = dateTime,
            //        LaneId = laneId
            //    };
            //    await this.TransactionNo.InsertAsync(data);
            //}
            //else
            //{
            //    if (isTrans)
            //    {
            //        // 交易序號可編 3 碼
            //        data.TransNo++;
            //        if (data.TransNo >= 1000) throw new Exceptions.WeighException(512, "已超出當日該車道交易序號編碼上限");
            //    }

            //    // 車道號碼可編 5 碼
            //    data.No++;
            //    if (data.No >= 100000) throw new Exceptions.WeighException(512, "已超出當日該車道序號編碼上限");

            //    await this.TransactionNo.UpdateAsync(data);
            //}

            //return data;
        }
    }
}
