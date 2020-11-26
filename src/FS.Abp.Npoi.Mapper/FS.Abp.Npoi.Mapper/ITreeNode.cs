using System.Collections.Generic;

namespace FS.Abp.Npoi.Mapper
{
    public interface ITreeNode<T>
        where T: ITreeNode<T>
    {
        List<T> Children { get; set; }
        string Code { get; set; }
    }
}