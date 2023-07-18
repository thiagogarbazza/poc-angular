import Identifiable from "@app-core/service/identifiable";

export default interface SelectableItem<T> extends Identifiable<T> {
  description: string
  tooltip? : string
}
