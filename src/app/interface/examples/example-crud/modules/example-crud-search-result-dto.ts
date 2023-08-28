export interface ExampleCRUDSearchResultDTO {
  id: string
  code: string
  description: string
  active: boolean
  scale: number
  type: string

  actions: {
    canDelete: boolean
    canUpdate: boolean
    canDetail: boolean
  }
}
