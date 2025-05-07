import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() jumpPage: number = 1;
  @Input() data: any[] = [];
  @Input() start: number = 1;
  @Input() end: number = 10;
  @Input() total: number = 10;
  @Input() page: number = 1;
  @Input() pageSize: number = 10;
  @Input() isJumPage: boolean = true;
  @Input() pageSizeOptions = [10, 20, 30, 40, 50, 80];
  @Input() showPageSizeSelector: boolean = true;
  @Input() isShowInfoPage: boolean = true;

  @Output() onJump = new EventEmitter<any>();
  @Output() onChangePage = new EventEmitter<any>();
  @Output() onPageSizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  jumpToPage(){
    this.onJump.emit(this.jumpPage);
  }

  handlePageIndexChange(event){
    this.page = event;
    this.onChangePage.emit(event);
  }

  handlePageSizeChange(event) {
    this.pageSize = event
    this.onPageSizeChange.emit(this.pageSize);
  }

  onInput(event: Event): void {
    const input = (event.target as HTMLInputElement);
    input.value = input.value.replace(/[^0-9]/g, '');
    this.jumpPage = Number(input.value);
  }
}
