import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, forwardRef } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';

import { Page } from '@app/core/models/page';
import { Sort, direction, sortSplit } from '@app/core/models/sort';
import { DataGridEventDTO } from './data-grid-event-dto';
import { DataGridSortDirective } from './data-grid-sort.directive';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, AfterContentInit {

  @Input('page') set setPage(value: Page<any>) {
    this.page = value;
    this.sortable(this.page.sort);
  }
  @Input() public searchable: boolean = false;
  @Output() public change = new EventEmitter<DataGridEventDTO>();
  @ContentChildren(DataGridSortDirective, { descendants: true }) sortableFields: QueryList<DataGridSortDirective>;
  public pageSizes: number[] = [5, 10, 20, 30, 40, 50, 100, 500, 1000];
  public page: Page<any>

  public filter?: string;

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.sortable(this.page.sort);
    this.sortableFields.forEach(i => {
      i.clickFn = (index?: number, sort?: Sort) => this.changeSort(index, sort);
    })
  }

  public changeFilter(value?: string) {
    this.filter = value;
    this.change.emit({ filter: this.filter, pageNumber: 0, pageSize: this.page.size, sort: this.page.sort });
  }

  public changePageNumber(pageNumber: number) {
    this.change.emit({ filter: this.filter, pageNumber: pageNumber, pageSize: this.page.size, sort: this.page.sort });
  }

  public changePageSize(pageSize: number) {
    this.change.emit({ filter: this.filter, pageNumber: 0, pageSize: pageSize, sort: this.page.sort });
  }

  public changeSort(index?: number, sort?: Sort) {
    const newSort: Sort[] = this.page.sort ? this.page.sort : [];

    if (index === undefined && sort != undefined) {
      newSort.push(sort);
    }

    if (index !== undefined && sort == undefined) {
      newSort.splice(index, 1);
    }

    if (index !== undefined && sort != undefined) {
      newSort[index] = sort;
    }

    this.change.emit({ pageNumber: 0, pageSize: this.page.size, sort: newSort });
  }

  private sortable(sort?: Sort[]) {
    const sortMap = this.createMapOfSorts(sort);
    this.sortableFields?.forEach(i => {
      const s = sortMap.get(i.field);
      if (s) {
        i.set(s.index, s.direction);
      } else {
        i.set(undefined, undefined);
      }
    })
  }

  private createMapOfSorts(sort?: Sort[]) {
    if (!sort || isEmpty(sort)) {
      return new Map();
    }

    const arrSort: Sort[] | undefined = Array.isArray(sort) ? sort : new Array<Sort>(sort as Sort);
    const sorts = arrSort?.map((i: Sort, index: number) => {
      const sort = sortSplit(i)
      return { index: index, field: sort?.field, direction: sort?.direction }
    });

    return new Map<any, any>(sorts?.map(obj => {
      return [obj.field, obj];
    }))
  }
}
