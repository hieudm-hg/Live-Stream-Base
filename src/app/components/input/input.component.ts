import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  searchSubject: Subject<string> = new Subject();
  
  @Input() searchText: string = '';
  @Input() width: string = '320px';
  @Input() style: string = '';
  @Input() placeholder: string = 'Tìm kiếm bằng tên người dùng hoặc email'

  @Output() onSearch = new EventEmitter<string | number>();
  @Output() onClear = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(500), 
        // distinctUntilChanged() 
      )
      .subscribe(value => {
        this.onSearch.emit(value);
      });
  }

  handleSearch(value){
    this.searchSubject.next(value);
  }

  handleOnClear(){
    this.searchText = ''; 
    this.onClear.emit();
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }

}
