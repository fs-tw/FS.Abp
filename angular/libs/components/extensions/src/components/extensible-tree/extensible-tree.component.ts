import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BaseNode, TreeAdapter } from '@abp/ng.components/tree';

@Component({
  exportAs: 'nzExtensibleTree',
  selector: 'nz-extensible-tree',
  styleUrls: ['./extensible-tree.component.css'],
  templateUrl: './extensible-tree.component.html',
})
export class ExtensibleTreeComponent implements OnInit {
  @Input()
  flat: Array<BaseNode> = [];

  @Output()
  add: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  nodes = [];
  treeAdapter: TreeAdapter;
  expandedKeys: Array<string> = [];

  constructor(
   
  ) {
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.treeAdapter = new TreeAdapter(this.flat as BaseNode[]);
    this.nodes = this.treeAdapter.getTree();
    this.expandedKeys = [...this.expandedKeys];
  }
}
