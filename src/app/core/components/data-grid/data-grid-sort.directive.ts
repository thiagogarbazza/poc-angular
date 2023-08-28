import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { Sort, direction } from '@app/core/models/sort';

type MyHandler = (index?: number, sort?: Sort) => any

@Directive({ selector: '[sort]' })
export class DataGridSortDirective {

  @Input('sort') field: string;
  @HostBinding('class.sortable') sortable = true;
  @HostBinding('class.sort-asc') asc = false;
  @HostBinding('class.sort-desc') desc = false;
  @HostBinding('attr.index') private index?: number;

  private direction?: direction;
  public clickFn: MyHandler;

  @HostListener('click')
  public onClick() {
    this.clickFn(this.index, this.nextSort());
  }

  public set(index?: number, direction?: direction) {
    this.index = index;
    this.direction = direction;

    this.defineDirection(direction);
  }

  private defineDirection(direction?: direction) {
    this.asc = direction === 'asc'
    this.desc = direction === 'desc'
  }

  private nextSort(): Sort | undefined {
    if (!this.direction) { return `${this.field}:asc`; }
    if ('asc' === this.direction) { return `${this.field}:desc`; }
    if ('desc' === this.direction) { return undefined; }
    return undefined;
  }
}
