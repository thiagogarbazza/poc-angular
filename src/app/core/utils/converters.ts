import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import trim from 'lodash-es/trim';
import isEmpty from 'lodash-es/isEmpty';
import padStart from 'lodash-es/padStart';
import pickBy from 'lodash-es/pickBy';
import isArray from 'lodash-es/isArray';
import isNull from 'lodash-es/isNull';
import isUndefined from 'lodash-es/isUndefined';

export class Converters {

  static DATA_DELIMITER_PT_BR = '/';
  static DATA_DELIMITER_ISO = '-';

  static string(value?: string): string | null {
    if(isEmpty(trim(value))) {
      return null;
    }
    return trim(value);
  }

  static dateToString(value?: string) : string | undefined {
    const date = trim(value);
    if(isEmpty(date)) {
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
    if(isEmpty(trim(value))) {
      return null;
    }
    if (value.includes(Converters.DATA_DELIMITER_PT_BR)) {
      const date = value.split(Converters.DATA_DELIMITER_PT_BR);
      return { day : parseInt(date[0], 10), month : parseInt(date[1], 10), year : parseInt(date[2], 10)};
    } else if (value.includes(Converters.DATA_DELIMITER_ISO)) {
      const date = value.split(Converters.DATA_DELIMITER_ISO);
      return { day : parseInt(date[2], 10), month : parseInt(date[1], 10), year : parseInt(date[0], 10)};
    }
    return null;
  }

  static ngbDateStructToStringPtBr(value: NgbDateStruct | null): string {
    if(isEmpty(value)) {
      return '';
    }
    return padStart('' + value.day, 2, '0') + Converters.DATA_DELIMITER_PT_BR + padStart('' + value.month, 2, '0') + Converters.DATA_DELIMITER_PT_BR + value.year;
  }

  static removerUndefinedEmptyNull(parameters: object): object {
    const res = pickBy(parameters, (value) => {
      let definido: boolean;
      if (isArray(value)) {
        definido = !isEmpty(value);
      } else {
        definido = !isUndefined(value) && !isNull(value) && !isEmpty(trim(value));
      }
      return definido;
    });
    return res;
  }
}
