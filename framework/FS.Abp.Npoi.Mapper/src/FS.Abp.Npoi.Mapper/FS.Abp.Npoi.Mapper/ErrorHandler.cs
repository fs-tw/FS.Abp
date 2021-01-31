using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Npoi.Mapper
{
    public class ErrorHandler : IErrorHandler
    {
        public class ErrorInfo
        {
            public ErrorInfo()
            {
                Properties = new Dictionary<string, string>();
            }
            public string Message { get; set; }
            public Exception Exception { get; set; }
            public Dictionary<string, string> Properties { get; set; }
        }
        public ErrorHandler()
        {
            ErrorInfos = new List<ErrorInfo>();
        }
        public List<ErrorInfo> ErrorInfos { get; set; }
        public void Clear()
        {
            this.ErrorInfos.Clear();
        }
        public void Add(ErrorInfo errorInfo)
        {
            this.ErrorInfos.Add(errorInfo);
        }
    }
}
