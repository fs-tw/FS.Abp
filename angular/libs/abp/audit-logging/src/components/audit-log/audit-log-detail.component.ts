import { Component, Input, OnInit } from '@angular/core';
import { Fs } from '@fs-tw/abp/audit-logging/proxy/audit-logging';
import { JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'fs-tw-audit-log-descriptions',
  templateUrl: './audit-log-detail.component.html',
  styles: [],
})
export class AuditLogDetailComponent implements OnInit {
  
  @Input()
  public model: Fs.Abp.AuditLogging.Dtos.AuditLogDto;

  public editorOptions: JsonEditorOptions;


  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code','view'];
    this.editorOptions.mode = 'view';
  }

  ngOnInit(): void {}
}
