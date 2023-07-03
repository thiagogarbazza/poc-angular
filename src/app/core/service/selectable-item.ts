import Identifiable from "./identifiable";

export default interface SelectableItem<T> extends Identifiable<T> {
  description: string
  tooltip? : string
}
