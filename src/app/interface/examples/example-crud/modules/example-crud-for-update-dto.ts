import { SelectableItem } from "@app/core/models/selectable-item"

export interface ExampleCRUDForUpdateDTO {
  dataToBuildForm: ExampleCRUDForUpdateDTODataToBuildForm
  formData: ExampleCRUDForUpdateDTOFormData
}

export interface ExampleCRUDForUpdateDTODataToBuildForm {
  types: SelectableItem<string>[]
}

export interface ExampleCRUDForUpdateDTOFormData {
  id: string
  code?: string
  description?: string
  active?: boolean
  scale?: number
  type?: SelectableItem<string>
  observation?: string
}
