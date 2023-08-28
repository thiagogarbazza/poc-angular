import { Sort, sortSplit } from "../models/sort";

export class CompareToBuilder {

  private comparison: number;

  constructor() {
    this.comparison = 0;
  }

  public appendWithSort(lhs: any, rhs: any, sorts?: Sort[]) {
    if (this.comparison != 0) {
      return this;
    }

    if(!sorts) {
      return this;
    }

    sorts.forEach(i => {
      const sort = sortSplit(i);
      if ('asc' === sort?.direction) {
        this.append(lhs[sort.field], rhs[sort.field]);
      } else if ('desc' === sort?.direction) {
        this.append(rhs[sort.field], lhs[sort.field]);
      }
    });

    return this;
  }

  /**
   *
   * @param lhs
   * @param rhs
   * @returns An int value:
   *   0 if the value is equal to the other value.
   *   < 0 if the value is less than the other value
   *   > 0 if the value is greater than the other value
   */
  public append(lhs: any, rhs: any): CompareToBuilder {
    if (this.comparison != 0) {
      return this;
    }
    if (lhs === rhs) {
      return this;
    }
    if (lhs == undefined) {
      this.comparison = -1;
      return this;
    }
    if (rhs == undefined) {
      this.comparison = 1;
      return this;
    }

    if (lhs < rhs) {
      this.comparison = -1;
    } else if (lhs > rhs) {
      this.comparison = 1;
    }

    return this;
  }

  /**
   *
   * @returns An int value:
   *   0 if the value is equal to the other value.
   *   < 0 if the value is less than the other value
   *   > 0 if the value is greater than the other value
   */
  public build(): number {
    return this.comparison;
  }

  public static builder() {
    return new CompareToBuilder();
  }
}​
