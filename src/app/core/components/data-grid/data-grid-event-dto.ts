import { Sort } from '@app/core/models/sort';

export interface DataGridEventDTO {
  filter?: string
  pageNumber: number
  pageSize: number
  sort?: Sort[]
}
