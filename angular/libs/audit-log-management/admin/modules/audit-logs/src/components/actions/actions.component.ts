import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { Fs } from '@fs-tw/audit-log-management/proxy/auditLogging';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'fs-tw-actions',
  templateUrl: './actions.component.html',
})
export class ActionsComponent implements OnInit {
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  
  @Input()
  selectedData: Fs.Abp.AuditLogging.AuditLogDto;
  
  constructor(
    private readonly injector: Injector,
  ) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code','view'];
    this.editorOptions.mode = 'view';
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
      
  }
}
