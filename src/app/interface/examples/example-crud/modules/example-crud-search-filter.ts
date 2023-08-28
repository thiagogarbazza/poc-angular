import { AbstractSearchFilter } from "@app/core/models/abstract-search-filter";

export interface ExampleCRUDSearchFilter extends AbstractSearchFilter {
  text?: string
  types?: string[]
}
