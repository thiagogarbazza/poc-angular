import { Identifiable } from "@app/core/models/identifiable";

export interface SelectableItem<T> extends Identifiable<T> {
  description: string
  tooltip?: string
}
