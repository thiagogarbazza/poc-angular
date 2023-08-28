import { Component } from '@angular/core';

import { DataGridEventDTO } from '@app/core/components/data-grid/data-grid-event-dto';
import { Page } from '@app/core/models/page';
import { Sort } from '@app/core/models/sort';
import { CompareToBuilder } from '@app/core/utils/compare-to-builder';

@Component({
  selector: 'app-example-data-grid',
  templateUrl: './example-data-grid.component.html',
  styleUrls: ['./example-data-grid.component.scss']
})
export class ExampleDataGridComponent {

  public items: Page<any>;
  public itemsInitialSort: Page<any>;
  public ItemsSearchable: Page<any>;

  constructor() {
    this.onChangeDataGridForItems({ pageNumber: 0, pageSize: 5, sort: undefined });
    this.onChangeDataGridForItemsInitialSort({ pageNumber: 0, pageSize: 5, sort: ['startDate:asc', 'age:desc'] });
    this.onChangeDataGridForItemsSearchable({ pageNumber: 0, pageSize: 5, sort: ['startDate:asc', 'age:desc'] });
  }

  public onChangeDataGridForItems(dataGrid: DataGridEventDTO) {
    const values = ITEMS;
    this.sortItems(values, dataGrid.sort);
    this.items = Page.from(values, dataGrid.pageNumber, dataGrid.pageSize, dataGrid.sort);
  }

  public onChangeDataGridForItemsInitialSort(dataGrid: DataGridEventDTO) {
    const values = ITEMS;
    this.sortItems(values, dataGrid.sort);
    this.itemsInitialSort = Page.from(values, dataGrid.pageNumber, dataGrid.pageSize, dataGrid.sort);
  }

  public onChangeDataGridForItemsSearchable(dataGrid: DataGridEventDTO) {
    const values = this.filterItems(ITEMS, dataGrid.filter);
    this.sortItems(values, dataGrid.sort);
    this.ItemsSearchable = Page.from(values, dataGrid.pageNumber, dataGrid.pageSize, dataGrid.sort);
  }

  private filterItems(values: ITEM[], text?: string): ITEM[] {
    if (!text) {
      return values;
    }

    return values.filter((i) => i.description.includes(text))
  }

  private sortItems(values: any[], sort?: Sort[]) {
    values.sort((lhs, rhs) => CompareToBuilder.builder()
      .appendWithSort(lhs, rhs, sort)
      .append(lhs.id, rhs.id)
      .build());
  }
}

const NOW = new Date();
const ITEMS: ITEM[] = Array.from({ length: 93 }, (value, index) => {
  const id = index + 1;
  return {
    id: id,
    description: `Description for id ${id}`,
    age: id % 9,
    startDate: new Date().setDate(NOW.getDate() - id % 13)
  }
});

type ITEM = {
  id: number
  description: string
  age: number
  startDate: number
}
