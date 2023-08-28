export interface ExampleCRUDDetailDTO {
  id: string
  code: string
  description: string
  active: boolean
  scale: number
  type: string
  observation?: string

  actions: {
    canDelete: boolean
    canUpdate: boolean
  }
}
