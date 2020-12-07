using System;
using Volo.Abp.Application.Dtos;

namespace Volo.FileManagement.Directories
{
    public class DirectoryContentRequestInput : ISortedResultRequest
    {
        public string Filter { get; set; }
        
        public string Sorting { get; set; }
        
        public Guid? Id { get; set; }
    }
}