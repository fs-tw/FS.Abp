using System;
using System.Collections.Generic;
using System.Text;

namespace Posts.Dtos
{
    public class PostAttachmentFilesDto
    {

    }

    public class PostAttachmentFilesCreateListDto 
    {
        public List<string> Base64 { get; set; }
    }
}
