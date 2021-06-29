import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/proxy/cms-kit-management';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'fs-tw-vocabularies',
  templateUrl: './vocabularies.component.html',
  styles: [
  ]
})
export class VocabulariesComponent implements OnInit {
  VocabulariesAdminService: Fs.CmsKitManagement.Vocabularies.VocabulariesApiService;
  public vocabularyDefinitionDatas$: Observable<any>;
  public vocabularyDatas$:Observable<any>;
  public totalCount$: Observable<number>;
  public vocabularyTotalData$:Observable<any>;
  constructor(
    private readonly injector: Injector,
  ) {
    
    this.VocabulariesAdminService = injector.get(
      Fs.CmsKitManagement.Vocabularies.VocabulariesApiService
    );
   }

  ngOnInit(): void {
    this.vocabularyDefinitionDatas$ = this.VocabulariesAdminService.getListByVocabularyDefinitionGetList({} as any).pipe(
      map((json) => {
        return json.items.map((i) => {
          return {
            key: i.id,
            displayName: i.displayName,
          };
        });
      })
    );

    /* this.vocabularyTotalData$=this.VocabulariesAdminService.getListByVocabularyGetList({maxResultCount:999}as any).pipe(
      map((json)=>{
        return{
          items: json.items.map((i)=>{
            return{
              id:i.id,
              displayName:i.displayName,
              no:i.no,
              definition:i.vocabularyDefinition.id,
              level:i.level,
              parentId:i.parentId
            };
          })
        };
      }),
    ); */
    
  }
  
  showDetail(Definition: any) {
    if (Definition != null) {
      this.vocabularyDatas$ =this.VocabulariesAdminService.getListByVocabularyGetList({maxResultCount: 999} as any).pipe(
        map((json)=>{
          return {
            totalCount: json.totalCount,
            items: json.items.map((i)=>{
              return {
                key:i.id,
                displayName:i.displayName,
                definition:i.vocabularyDefinition.id,
                no:i.no,
              };
            }).filter(y => {
              return y.definition == Definition.key
            })
          }
        }),
      )
      /* this.vocabularyDatas$ =this.vocabularyTotalData$.pipe(
        map((list)=>{
          return {
            items: list.items.map((i)=>{
              return {
                id:i.id,
                displayName:i.displayName,
                definition:i.definition,
                no:i.no,
                noActive:false,
                level:i.level,
                children: list.items.filter(x=>{
                  return x.parentId==i.id
                }).map((chil)=>{
                  return{
                    displayName:chil.displayName,
                    no:chil.no,
                    noActive:true
                  };
                })
              };
            }).filter(y => {
              console.log(y)
              return y.level == 1 && y.definition==Definition.key
            })
          }
        }),
      ) */
    };
  }
}
