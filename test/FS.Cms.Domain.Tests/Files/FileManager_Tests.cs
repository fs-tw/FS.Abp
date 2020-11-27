using FS.Abp.Files;
using FS.Cms.Storage;
using Shouldly;
using System;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Xunit;

namespace FS.Cms.Samples
{
    public class FileManager_Tests : CmsDomainTestBase
    {
        const string base64 = "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFi70/9osflsM8mMQ8jb4+m8Y7jL0/ncc6mcU7n8g6irw/msU7lMI9nMY7lcI8k8E9l8Q8ibw/j78+ock5oso5o8o5iLtApMs5jr4+l8M8jr8+oMk6kcA9mcQ7h7tAlcM8iLs/nsc6nsg6jL4+ksE9kL8+pcs4h7pAhrpApcw4nMc7psw4kMA+ock6lMI8oMg6jL0+ibs/kMA9pcs5+Pvz+Zwq+aAtsdJt+qYw7fTa+KFJ95Ai/vjx/LdI4u7PmsVJ+fvz95It+6w0+qgy+KhX/NOr9o0gmcRX/bk9vdmG/LI495MkyeCe9o4hksFL+qMu/uS4+Z4s95Ql/cJV6fLb/NCWksA9+7dh5fDO+qQv/enV+Jko/eLHoclj/ujL/dGKrdFgstN78Pfn0ua3+6oz/LA3+Jcnq85hq89E/Ny5+qUw+Jsp95o7xd6f+JYm/vDj+sWP+Z4r2eq1+bdz6vPayeCRttWH+682/typ/tudy+Kr/LY6/ct1+Jgn8/jm+fzzwtyf3uzC4u7Bqc5v+JopttVdlsNYvdmT948i/MJk+6s0+r6BrdB8/dWZxt6R+8yd+aIup81i2urD9/vzrtFup81v/LQ6+75l+JUm0eWp1Oe2+a9lj79M95Ej/MiI/eXJwtySoMlVvNlq/urM6PLN3ey0ospH/K82sNJRsdJflcJKncc7pMtw/LM5/vHa//bmxd6E1ui2/MNp+8SF+Joo/tiSp8xU/+7O6/TazeKdmcQ8+601/LtR5O/OpMtUwtyEx9+D//rz0uWbp8xGzeKP+qcx2+u1tNSIn8lHnsdknchIuth4/spt3OvCttVrt9aH/bc7rtFSpMtGyN+D+Zsq+rNe9owf95Ul+rt2+8N7/bw+qM1U/NKh+KA2x9+e2Omo+Jky+alP/M2U/vLl/uCqwduT1uio/unC//ny+Jcm+J4+l8RKo8tiz+Sc+7hYtNRsuddr/tB7+rRo+JYw+qpGs9Rsv9t4+8eQ+rFU/shj/uXA+754ncdWwtx2/s55////0f3jMQAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAA18SURBVHja7N19XBR1Hgfw5cEHEAVRVATNlHxoPS9t73BxXSBZFcXNBy6RQBE0IEEQ1ic0HiTBBEUUTQFPEvXUU0zN1FR8Ik0r6UktKzvTLu+0e667Ou+medyd5/n9ZmfZHV77+7eX7L75/L6fmZ2dCQ3STpbGDXFD3BA3xA1xQ9wQN8QNcUPcEDcEYpVsax8QXXN6+4DEBnvq2gOkJDjYs6QdQAqvBgcHN7QDSDoaiGe6+iHrAzCIckPiLEhJQADm8ExQOeTEVSIQzzh1Q6LSyUA831U3JDyADGREs6oh6wMoyGPddCqG5HlZHY91S1AvJMGLDtmmWoj+qlcAOeqoo1ucWiFRzYxAuoWrFBKV7mUNBB119ULCvZiBdBuhTkisFxFIMBVINz9VQmLf4gTid0KFkDwvTiAj/BLUB8nrR0FogagQQjjYO8tvm9og+n6MQMhR9/OLUxlE/w4FYQaiNoj+nc79uKPupzoI5uAPRF0Q1MEXiOogUSmdO/fj7V4/P38VQTBHZ/7uVRWEcPB3r5ogUSldaBBOIKqBMB3cQNQCQR3igfiXqAJCOgS7F4WcUQMEc3B3FiMQVUAoh3D3oksFnxCjUjpIB6ICCOHAIW8JB1Lj8hDUwRsIo3v9/WNdHUI6JLpXscOIwyCYo0MXye5VrLQcBcEdIKMe5tpfK+g/78AKRGhnVSOuDNHv6QAaSIMrQ/R7upIOqe71DytxYQjq6CoUCKt7/cMQ14XQHJLdGzbXdSElqKNrB8DuDTvsspC8J0lHB5BAIhFXheR1epInEEFIrKtCbA6g7g1LdVHI4k70QKS7twZxTchZwgHevWdcE4I6OIH0a6tAlINEXUMdnbpKdi8tEPAJ0SW3GSRqXyfYQBogHOa2ghTue5wFkeze14BP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";
        private readonly IFileManager _fileManager;
        private readonly IStorageManager storageManager;
        public FileManager_Tests()
        {
            _fileManager = GetRequiredService<IFileManager>();
            storageManager = GetRequiredService<IStorageManager>();
        }
        [Fact]
        public async Task Save_No_Error_When_Create_File_Codes()
        {
            await this.WithUnitOfWorkAsync(async () =>
            {
                await storageManager.CreateCodeFile(new Abp.Core.Files.FileChangedEvent()
                {
                    Name = "test.jpg",
                    FileSize = 5,
                    FileSizeStr = "5bit",
                    IsDelete = false
                });
            });            
        }

 
        public async Task Save_And_Delete_ForBase64()
        {
            var fileName = "further1.png";            
            
            //存檔
            await this._fileManager.SaveBytesAsync(fileName, base64);
            byte[] bytes = await this._fileManager.GetBytesAsync(fileName);
            bytes.Length.ShouldBeGreaterThan(0);


            //刪除檔案
            await this._fileManager.DeleteAsync(fileName);
            bytes = await this._fileManager.GetBytesAsync(fileName);
            bytes.ShouldBe(null);
        }


        public async Task Save_And_Delete_ForBytes()
        {
            var fileName = "further2.png";
            
            //base64轉bytes
            var bytes = Convert.FromBase64String(base64);

            //存檔
            await this._fileManager.SaveBytesAsync(fileName, bytes);
            byte[] anotherBytes = await this._fileManager.GetBytesAsync(fileName);
            anotherBytes.Length.ShouldBeGreaterThan(0);


            //刪除檔案
            await this._fileManager.DeleteAsync(fileName);
            bytes = await this._fileManager.GetBytesAsync(fileName);
            bytes.ShouldBe(null);
        }


    }
}
