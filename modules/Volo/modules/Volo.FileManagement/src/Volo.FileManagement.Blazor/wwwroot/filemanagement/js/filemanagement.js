var  fileManagementPage = {};
(function (){

    fileManagementPage.downloadFile = function(fileName, fileContent, mimeType){
            var link = document.createElement('a');

            var fileData = atob(fileContent);
            var fileBytes = new Uint8Array(fileData.length);
            for (var i = 0; i < fileData.length; i++) {{
                fileBytes[i] = fileData.charCodeAt(i);
            }}
            var blob = new Blob([fileBytes.buffer], {type: mimeType});
            link.download = fileName;
            var url = URL.createObjectURL(blob);
            link.href = url;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        }
})();
