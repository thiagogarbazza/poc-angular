import { Injectable } from '@angular/core';
import trim from 'lodash-es/trim';
import isEmpty from 'lodash-es/isEmpty';

@Injectable()
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  contains(key: string): boolean {
    const value = this.storage.getItem(key) as string;
    return isEmpty(trim(value));
  }

  get(key: string): object | undefined {
    const value = this.storage.getItem(key) as string;
    if (isEmpty(trim(value))) {
      return undefined;
    }

    return JSON.parse(value);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  set(key: string, value: object | undefined) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
