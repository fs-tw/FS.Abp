#  Warning on Existing Works

`angular.json`

```json
scripts:[
 "node_module/ajv/...",//remove
 "node_module/qrious/...",//remove
]

"allowedCommonJsDependencies": [
  "file-saver",
  "hammerjs",
   "ajv" //add

]
```

css變更(有用到Compact style 才需要)

`src/assets/style.compact.css`

檢查 `tsconfig.json`
``` json
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
```


# 版型修正項
選單查詢  
`\src\app\layout\ms\_widgets\all-nav\all-nav.service.ts`
`\src\app\layout\ms\_widgets\search\search.component.ts`
`\src\app\layout\ms\_widgets\search\search.component.html`
`\src\app\layout\ms\_widgets\search\search.component.less`


top-bar,side-bar
`\src\app\layout\ms\components\side-bar`
`\src\app\layout\ms\components\top-bar`

page-bar,single-bar
`\src\app\layout\ms\shared\page-bar`
`\src\app\layout\ms\shared\page-single`
`\src\app\layout\ms\shared\service-layout`




