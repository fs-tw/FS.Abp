### 2021-01-25

# nxWork
``` json 
1.npx create-nx-workspace@latest test
2.選 angular (才有 angular devkit)
```

# 步驟  
``` json
1.nx workspace-schematic init-flow --configName=base --name=volo  
2.手動複製 .npmrc (move 指令沒搬此檔，原因未查)  
3.nx workspace-schematic theme-alain --name=isg-admin-app --abpApplicationName=ISG --cshapBacknedPort=43333
```

# 說明
以下依賴加在
``` json
    "date-fns": "2.16.1",
    "@fs-tw/account": "410.0.1",
    "@fs-tw/emailing": "410.0.1",
    "@fs-tw/theme-alain-ms": "410.0.1"
``` 
根目錄 package.json(date-dns 應該寫在 @fs-tw/theme-alain-ms 依賴?) 
