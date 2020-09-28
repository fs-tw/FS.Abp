﻿using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public partial class PostsController : CmsController
    {
        [HttpPost, DisableRequestSizeLimit]
        [Route("images")]
        public List<Core.Dtos.CmsImageFieldDto> UploadImage(Guid PostId)
        {

            string folderName = String.Format("wwwroot/File/Cms/Posts/{0}", PostId.ToString());
            var files = Request.Form.Files.ToList();

            UploadImageInput input = JsonConvert.DeserializeObject<UploadImageInput>(Request.Form["input"]);
            var fileUrls = this.saveFile(folderName, files, input.IsCoverName);
            this.deleteFile(folderName, input.DeleteFiles);

            CmsImageModel ImageModel = new CmsImageModel();
            ImageModel.ImgaeField = fileUrls;
            ImageModel.UploadImageInput = input;
            this._postsAppService.Save(ImageModel, PostId);
            return fileUrls;
        }


        private List<Core.Dtos.CmsImageFieldDto> saveFile(string folderName, List<IFormFile> files, string coverName)
        {
            string webRootPath = _env.ContentRootPath;
            string folderPath = Path.Combine(webRootPath, folderName);

            List<Core.Dtos.CmsImageFieldDto> images = new List<Core.Dtos.CmsImageFieldDto>();


            files.ForEach(file =>
            {
                var filePath = ContentDispositionHeaderValue
                                .Parse(file.ContentDisposition)
                                .FileName.Trim('"');

                string fileName = Path.GetFileName(filePath);

                try
                {
                    Core.Dtos.CmsImageFieldDto image = new Core.Dtos.CmsImageFieldDto();

                    string fullPath = Path.Combine(folderPath, fileName);

                    if (!Directory.Exists(folderPath))
                        Directory.CreateDirectory(folderPath);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        string noRootUrl = folderName.Replace("wwwroot/", "");
                        image.Width = 0;
                        image.Height = 0;
                        image.Title = fileName;
                        image.Url = noRootUrl + "/" + fileName;
                        if (file.FileName.Equals(coverName))
                        {
                            image.IsCover = true;
                        }
                        images.Add(image);
                    }
                }
                catch
                {
                    //上傳檔案失敗
                }

            });

            return images;
        }

        private void deleteFile(string folderName, List<string> urls)
        {
            string webRootPath = _env.ContentRootPath;
            string folderPath = Path.Combine(webRootPath, folderName);

            urls.ForEach(path =>
            {
                string filePath = Path.Combine(folderPath, path);
                if (System.IO.File.Exists(filePath))
                {
                    try
                    {
                        System.IO.File.Delete(filePath);
                    }
                    catch
                    {
                        //刪除失敗
                    }
                }

            });
        }

    }
}
