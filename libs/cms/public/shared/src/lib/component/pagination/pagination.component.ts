import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fs-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  /** 總筆數 */
  @Input() totalCount: number = 0;

  /** 每頁筆數 */
  @Input() pageSize: number = 10;

  /** 目前頁數 */
  @Input() page: number = 1;

  /** 最多顯示頁數 */
  @Input()
  showPageCount: number = 5;

  /** 換頁 */
  @Output() onChangePage: EventEmitter<{
    skipCount: number;
    maxResultCount: number;
  }> = new EventEmitter();

  get totalPage(): number {
    if (this.pageSize <= 0 || this.totalCount < 0) return 0;
    return Math.ceil(this.totalCount / this.pageSize);
  }

  get showPageArray(): number[] {
    if (!this.totalPage || !this.showPageCount) return [];

    let pages: number[] = [];
    let arrMin: number = getMin(this.page, this.showPageCount, this.totalPage);
    let arrMax: number = arrMin + this.showPageCount;
    if (arrMax > this.totalPage) arrMax = this.totalPage + 1;
    for (let i = arrMin; i < arrMax; i++) {
      pages.push(i);
    }

    return pages;

    function getMin(
      page: number,
      showPageCount: number,
      totalPage: number
    ): number {
      let midNum: number = Math.floor(showPageCount / 2);
      let isForefront = page <= midNum + 1;
      let isLast = page >= totalPage - midNum;

      if (isForefront) return 1;
      if (isLast) return totalPage - showPageCount + 1;
      return page - midNum;
    }
  }

  constructor() { }

  ngOnInit() { }

  changePage(page: number) {
    this.page = page;

    this.onChangePage.emit({
      skipCount: (this.page - 1) * this.pageSize,
      maxResultCount: this.pageSize
    });
  }

  previousPage() {
    if (this.page <= 1) return;
    this.changePage(this.page - 1);
  }

  nextPage() {
    if (this.page >= this.totalPage) return;
    this.changePage(this.page + 1);
  }

  firstPage() {
    this.changePage(1);
  }

  lastPage() {
    this.changePage(this.totalPage);
  }

  backFirstPage() {
    this.page = 1;
  }
}
