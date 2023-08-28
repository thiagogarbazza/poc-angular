import { SelectableItem } from "@app/core/models/selectable-item"
import { Page } from "@app/core/models/page"

import { ExampleCRUDSearchResultDTO } from "./example-crud-search-result-dto"

export interface ExampleCRUDForSearchDTO {
  dataToBuildForm: ExampleCRUDForSearchDTODataToBuildForm
  formData: ExampleCRUDForSearchDTOFormData
  result: Page<ExampleCRUDSearchResultDTO>
}

export interface ExampleCRUDForSearchDTOFormData {
  text?: string
  types: SelectableItem<string>[]
}

export interface ExampleCRUDForSearchDTODataToBuildForm {
  types: SelectableItem<string>[]
}

