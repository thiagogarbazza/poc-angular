import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Page } from '@app/core/models/page';

type PageNumber = {
  id: number
  active: boolean
  link: boolean
  description: boolean
}

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  private static PAGINATION_LENGTH = 7;

  public pages: PageNumber[]
  public hasPrevious: boolean = false
  public hasNext: boolean = false
  public next: number;
  public previous: number;

  @Output() public change = new EventEmitter<number>();

  @Input('page') set setPage(value: Page<any>) {
    this.hasPrevious = value.hasPrevious;
    this.hasNext = value.hasNext;
    this.next = value.next
    this.previous = value.previous
    this.pages = this.createPages(value.number, value.totalPages);
  }

  public changePage(number: number) {
    this.change.emit(number);
  }

  public createPages(page: number, totalPages: number) {
    const numbers = this.numbers(page, totalPages);

    return numbers.map(i => {
      const active = i === page;
      const triller = i === '...';

      return { id: i, active: active, link: !(active || triller), description: triller ? i : i + 1 };
    });
  }

  private numbers(page: number, totalPages: number) {
    let numbers = [];
    const buttons = PaginationComponent.PAGINATION_LENGTH;
    const half = Math.floor(buttons / 2);

    if (totalPages <= buttons) {
      numbers = this.numberRange(0, totalPages);
    } else if (page <= half) {
      numbers = this.numberRange(0, buttons - 2);
      numbers.push('...');
      numbers.push(totalPages - 1);
    } else if (page >= totalPages - 1 - half) {
      numbers = this.numberRange(totalPages - (buttons - 2), totalPages);
      numbers.splice(0, 0, '...'); // no unshift in ie6
      numbers.splice(0, 0, 0);
    } else {
      numbers = this.numberRange(page - half + 2, page + half - 1);
      numbers.push('...');
      numbers.push(totalPages - 1);
      numbers.splice(0, 0, '...');
      numbers.splice(0, 0, 0);
    }
    return numbers;
  }

  private numberRange(len: number, start: number): any[] {
    var out = [];
    var end;
    if (start === undefined) {
      start = 0;
      end = len;
    } else {
      end = start;
      start = len;
    }
    for (var i = start; i < end; i++) {
      out.push(i);
    }
    return out;
  }
}
