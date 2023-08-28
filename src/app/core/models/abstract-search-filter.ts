import { Sort } from './sort'

export interface AbstractSearchFilter {
  /** page number, zero based. */
  pn?: number
  /** page size */
  ps?: number
  /** sort fields */
  sort?: Sort[]
}
