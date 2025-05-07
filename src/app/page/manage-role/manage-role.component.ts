import { Component, OnInit } from '@angular/core';
import { columnsDisplay } from './config';
import { ColumnItem } from 'src/app/Constant/common';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})
export class ManageRoleComponent implements OnInit {

  searchText: string = '';
  loading: boolean = false;
  total: number = 10;
  listOfDisplayData: any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  pageSize: number = 10;
  page: number = 1;
  checked: boolean = false;
  indeterminate: boolean = false;
  listColumnsDisplay: ColumnItem[] = [...columnsDisplay];
  setOfCheckedId = new Set<string>();
  selectedItems: any[] = [];
  orderBy: string = null;
  isAsc: boolean = false;

  constructor(
    private nzContextMenuService: NzContextMenuService,
  ) { }

  ngOnInit(): void {
  }

  handleOnSearch(value){

  }

  handleOnClear(){

  }

  //CHECKBOX LOGIC
  checkAll(checked){
    this.listOfCurrentPageData?.forEach((item) => {
      this.updateCheckedSet(item, checked);
    });
    this.refreshCheckedStatus();
  }

  onItemChecked(data, checked: boolean) {
    this.updateCheckedSet(data, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(data, checked: boolean) {
    if (checked) {
      this.setOfCheckedId.add(data.id);
      if (!this.selectedItems?.some((item) => item?.id === data?.id)) {
        this.selectedItems?.push(data);
      }
    }
    else {
      this.setOfCheckedId.delete(data?.id);
      this.selectedItems = this.selectedItems?.filter(
        (item) => item?.id !== data?.id
      );
    }
  }

  refreshCheckedStatus() {
    if (this.listOfCurrentPageData?.length) {
      this.checked = this.listOfCurrentPageData?.every((item) => this.setOfCheckedId.has(item?.id));
    }
    else {
      this.checked = false;
    }
    this.indeterminate = this.listOfCurrentPageData?.some((item) => this.setOfCheckedId?.has(item?.id)) && !this.checked;
  }

  //LOGIC TABLE
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    let isAscend = false;
    if (currentSort && currentSort.value === 'ascend') {
      isAscend = true;
    }
    this.orderBy = sortField;
    this.isAsc = isAscend;
    // this.fetchListUser();
  }
  onCurrentPageDataChange(event) {
    this.listOfCurrentPageData = event;
    this.refreshCheckedStatus();
  }

  //LOGIC VIEW
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent) {
    this.nzContextMenuService.create($event, menu);
  }

  handlePageIndexChange(page){

  }

  handlePageSizeChange(size){

  }


}
