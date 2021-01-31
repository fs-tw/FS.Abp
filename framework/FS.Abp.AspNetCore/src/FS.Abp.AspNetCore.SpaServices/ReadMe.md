# How to Use It
## 0. Prepare  your we applcation(ex angular, vue)
Build your application into `wwwroot` path .(you could config it in appsettings.json)
Your folder structure could be  
``` json
wwwroot  
  ng-alain-app  
  other-app
```

## 1. Add Setting section  
Open `appsettings.json`
``` json
  "FS": {
    "SpaService": {
      "ApplicationRoot": "wwwroot",
      "ApplicationNames": "ng-alain-app,other-app"
    }
  }
  ....
```

## 2. Use FSAbpSpaService

Open module file append at `OnApplicationInitialization` section

``` csharp

            app.UseAbpSerilogEnrichers();
            app.UseConfiguredEndpoints();
            app.UseFSAbpSpaService(); //add this

```
It will use `app.Spa(..)` function to add Static File.  


## 3.Deploy it in iis
if you follow those settings then    
open `http://yourdomain.com.tw/ng-alain-app` , you will see ng-alain themes
open `http://yourdomain.com.tw/other-app` , you will see other-app themes

## Other Reference
1.This module Include nuget package `Microsoft.AspNetCore.SpaServices.Extensions`.
2.https://github.com/abpframework/abp/issues/857

