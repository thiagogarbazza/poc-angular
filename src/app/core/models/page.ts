import { SimpleMessage } from './simple-message'
import { Sort } from './sort'

export class Page<T> {
  content: T[]
  contentSize: number
  empty: boolean
  first: boolean
  hasContent: boolean
  hasNext: boolean
  hasPrevious: boolean
  last: boolean
  messages?: SimpleMessage[]
  number: number
  parameters?: Record<string, any>
  size: number
  sort?: Sort[]
  totalElements: number
  totalPages: number
  previous: number
  next: number

  constructor(content: T[], totalElements: number, page: number, size: number, sort?: Sort[]) {
    this.content = content;
    this.contentSize = content.length;
    this.totalElements = totalElements;
    this.number = page;
    this.size = size;
    this.totalPages = Math.ceil(totalElements / size)
    this.hasContent = this.contentSize > 0;
    this.hasNext = this.number + 1 < this.totalPages;
    this.hasPrevious = this.number > 0;
    this.empty = !this.hasContent;
    this.first = !this.hasPrevious;
    this.last = !this.hasNext;
    this.sort = sort;
    this.previous = page - 1;
    this.next = page + 1;
  }

  /**
   *
   * @param content
   * @param page
   * @param size
   * @returns
   */

  public static from<T>(content: T[], page?: number, size?: number, sort?: Sort[]): Page<T> {
    const totalElements = content.length;
    const pageNumber = page ? parseInt(page + '') : 0;
    const pageSize = size ? parseInt(size + '') : 10;

    const start = (pageNumber * pageSize);
    let end = pageSize * (pageNumber + 1);

    if (end > totalElements) {
      end = totalElements;
    }

    const items = content.slice(start, end);

    return new Page(items, totalElements, pageNumber, pageSize, sort);
  }
}
