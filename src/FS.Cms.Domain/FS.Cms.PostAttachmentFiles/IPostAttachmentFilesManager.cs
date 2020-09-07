using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Posts
{
    public interface IPostAttachmentFilesManager
    {
        //Task<List<PostAttachmentFiles>> CreateListAsync(List<string> base64List);
        Task<PostAttachmentFiles> CreateOneAsync(string base64, Guid PostId);
        Task DeleteListByPostId(Guid PostId);
        PostAttachmentFiles GetByStrId(string id);
    }
}