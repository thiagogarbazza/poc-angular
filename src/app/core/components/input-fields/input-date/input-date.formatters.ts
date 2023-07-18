import {Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Converters } from '@app-core/utils/converters';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  fromModel(value: string): NgbDateStruct | null {
    return Converters.stringToNgbDateStruct(value);
  }
  toModel(date: NgbDateStruct | null): string | null {
    return Converters.ngbDateStructToStringPtBr(date);
  }
}
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct | null {
    return Converters.stringToNgbDateStruct(value);
  }
  format(date: NgbDateStruct | null): string {
    return Converters.ngbDateStructToStringPtBr(date);
  }
}
