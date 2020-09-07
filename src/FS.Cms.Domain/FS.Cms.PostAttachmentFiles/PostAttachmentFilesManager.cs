using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Services;
using Volo.Abp.Guids;

namespace FS.Cms.Posts
{
    public class PostAttachmentFilesManager : DomainService, IPostAttachmentFilesManager
    {
        private readonly IGuidGenerator guidGenerator;
        private readonly IPostAttachmentFilesRepository postAttachmentFilesRespoitory;

        public PostAttachmentFilesManager(
               IGuidGenerator guidGenerator,
            IPostAttachmentFilesRepository postAttachmentFilesRespoitory
            )
        {
            this.guidGenerator = guidGenerator;
            this.postAttachmentFilesRespoitory = postAttachmentFilesRespoitory;
        }

        //public async Task<List<PostAttachmentFiles>> CreateListAsync(List<string> base64List)
        //{
        //    List<PostAttachmentFiles> entityList = new List<PostAttachmentFiles>();
        //    foreach (var data in base64List)
        //    {
        //        PostAttachmentFiles entity = new PostAttachmentFiles();
        //        entity.ContentType = ContentType.base64;
        //        entity.Content = data;
        //        EntityHelper.TrySetId(entity, () => guidGenerator.Create(), true);
        //        await this.postAttachmentFilesRespoitory.InsertAsync(entity).ConfigureAwait(false);
        //        entityList.Add(entity);
        //    }

        //    return entityList;

        //}

        public PostAttachmentFiles GetByStrId(string id) 
        {
            Guid guidId = new Guid(id);
            return this.postAttachmentFilesRespoitory.Where(x => x.Id == guidId).FirstOrDefault();
        }

        public async Task<PostAttachmentFiles> CreateOneAsync(string base64,Guid PostId)
        {          
            PostAttachmentFiles entity = new PostAttachmentFiles();
            //entity.ContentType = ContentType.base64;
            entity.Content = base64;
            entity.PostId = PostId;
            EntityHelper.TrySetId(entity, () => guidGenerator.Create(), true);
            await this.postAttachmentFilesRespoitory.InsertAsync(entity).ConfigureAwait(false);            
            return entity;
        }

        public async Task DeleteListByPostId(Guid PostId) 
        {
            var list = this.postAttachmentFilesRespoitory.Where(x => x.PostId == PostId).ToList();
            foreach (var item in list) 
            {
                await this.postAttachmentFilesRespoitory.DeleteAsync(item).ConfigureAwait(false);
            }
        }
    }
}
