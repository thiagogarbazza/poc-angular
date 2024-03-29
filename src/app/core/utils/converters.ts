import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import trim from 'lodash-es/trim';
import isEmpty from 'lodash-es/isEmpty';
import padStart from 'lodash-es/padStart';
import pickBy from 'lodash-es/pickBy';
import isArray from 'lodash-es/isArray';
import isNull from 'lodash-es/isNull';
import isUndefined from 'lodash-es/isUndefined';

import { Identifiable } from '@app/core/models/identifiable';

export class Converters {

  static DATA_DELIMITER_PT_BR = '/';
  static DATA_DELIMITER_ISO = '-';

  public static boolean(value?: boolean): boolean | undefined {
    return value;
  }

  public static date(value?: Date): string | undefined {
    if (!value) {
      return undefined;
    }

    return value.toISOString().substring(0, 10);
  }

  public static identifiable<T>(value?: Identifiable<T>): T | undefined {
    if (isEmpty(value)) {
      return undefined;
    }

    return value?.id;
  }

  public static identifiables<T>(value?: Identifiable<T>[]): T[] | undefined {
    if (isEmpty(value)) {
      return undefined;
    }

    return value?.map(i => i.id);
  }

  public static number(value?: number): number | undefined {
    return value;
  }

  public static string(value?: string): string | undefined {
    if (isEmpty(trim(value))) {
      return undefined;
    }

    return trim(value);
  }

  static dateToString(value?: string): string | undefined {
    const date = trim(value);
    if (isEmpty(date)) {
      return undefined;
    }
    if (date.includes(Converters.DATA_DELIMITER_PT_BR)) {
      const arrDate = date.split(Converters.DATA_DELIMITER_PT_BR);
      return padStart(arrDate[2], 2, '0') + Converters.DATA_DELIMITER_ISO + padStart(arrDate[1], 2, '0') + Converters.DATA_DELIMITER_ISO + arrDate[0];
    }
    if (date.includes(Converters.DATA_DELIMITER_ISO)) {
      const arrDate = date.split(Converters.DATA_DELIMITER_ISO);
      return padStart(arrDate[0], 2, '0') + Converters.DATA_DELIMITER_ISO + padStart(arrDate[1], 2, '0') + Converters.DATA_DELIMITER_ISO + arrDate[2];
    }

    return value;
  }

  static stringToNgbDateStruct(value: string): NgbDateStruct | null {
    if (isEmpty(trim(value))) {
      return null;
    }
    if (value.includes(Converters.DATA_DELIMITER_PT_BR)) {
      const date = value.split(Converters.DATA_DELIMITER_PT_BR);
      return { day: parseInt(date[0], 10), month: parseInt(date[1], 10), year: parseInt(date[2], 10) };
    } else if (value.includes(Converters.DATA_DELIMITER_ISO)) {
      const date = value.split(Converters.DATA_DELIMITER_ISO);
      return { day: parseInt(date[2], 10), month: parseInt(date[1], 10), year: parseInt(date[0], 10) };
    }
    return null;
  }

  static ngbDateStructToStringPtBr(value: NgbDateStruct | null): string {
    if (isEmpty(value)) {
      return '';
    }
    return padStart('' + value.day, 2, '0') + Converters.DATA_DELIMITER_PT_BR + padStart('' + value.month, 2, '0') + Converters.DATA_DELIMITER_PT_BR + value.year;
  }

  public static removerUndefinedEmptyNull<T extends object>(parameters: T): T {
    const res = pickBy(parameters, (value) => {
      let definido: boolean;
      if (isArray(value)) {
        definido = !isEmpty(value);
      } else {
        definido = !isUndefined(value) && !isNull(value) && !isEmpty(trim(value));
      }
      return definido;
    });

    return res as T;
  }
}
