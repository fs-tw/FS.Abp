# Step 1
使用 nx generators "fs-add" 豐碩產生範本

# Step 2
建立後 ng build {themename} --prod

# lib.prod 目前版本
```json 

/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {
    "enableIvy": false,
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "enableResourceInlining": true,
    "fullTemplateTypeCheck": true
  }
}
```

# angular.json build 使用 nrwl package
```json
      "architect": {
        "build": {
          "builder": "@nrwl/angular:package",
          "options": {
            "tsConfig": "libs/cms/tsconfig.lib.json",
            "project": "libs/cms/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "libs/cms/tsconfig.lib.prod.json"
            }
          }
        },
        "lint": {
          "builder": "@nrwl/linter:eslint",
          "options": {
            "lintFilePatterns": [
              "libs/cms/src/**/*.ts",
              "libs/cms/src/**/*.html"
            ]
          }
        },
````



