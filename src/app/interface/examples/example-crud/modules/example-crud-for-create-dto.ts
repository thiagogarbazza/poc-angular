import { SelectableItem } from "@app/core/models/selectable-item"

export interface ExampleCRUDForCreateDTO {
  dataToBuildForm: ExampleCRUDForCreateDTODataToBuildForm
  formData: ExampleCRUDForCreateDTOFormData
}

export interface ExampleCRUDForCreateDTODataToBuildForm {
  types: SelectableItem<string>[]
}

export interface ExampleCRUDForCreateDTOFormData {
  code?: string
  description?: string
  active?: boolean
  scale?: number
  type?: SelectableItem<string>
  observation?: string
}
