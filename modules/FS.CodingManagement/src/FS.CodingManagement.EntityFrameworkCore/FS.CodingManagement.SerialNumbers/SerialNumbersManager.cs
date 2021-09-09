
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CodingManagement.SerialNumbers
{
    public partial class SerialNumbersManager : DomainService, ISerialNumbersManager
    {
        protected IProviderStore ProviderStore => this.LazyServiceProvider.LazyGetRequiredService<IProviderStore>();
        protected ISerialNumbersStore SerialNumbersStore => this.LazyServiceProvider.LazyGetRequiredService<ISerialNumbersStore>();
        public async Task<SerialNumber> GenerateAsync(string providerName, string providerKey = null)
        {
            var provider = await ProviderStore.GetProviderAsync(providerName);
            var data = await this.AsyncExecuter.SingleOrDefaultAsync(
                this.SerialNumbersStore.SerialNumber.Where(x => x.ProviderName == providerName && x.ProviderKey == providerKey));
            if (data == null)
            {
                data = new SerialNumber(this.GuidGenerator.Create())
                {
                    Value = 1,
                    ProviderName = providerName,
                    ProviderKey = providerKey
                };
                await this.SerialNumbersStore.SerialNumber.InsertAsync(data);
            }
            else
            {
                data.Value++;
                await this.SerialNumbersStore.SerialNumber.UpdateAsync(data);
            }

            var newData = await this.AsyncExecuter.SingleOrDefaultAsync(
                this.SerialNumbersStore.SerialNumber.Where(x => x.ProviderName == providerName && x.ProviderKey == providerKey));
            
            return data;


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
