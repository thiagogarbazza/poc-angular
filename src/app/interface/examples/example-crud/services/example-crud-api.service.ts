import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import includes from 'lodash-es/includes';

import { Page } from "@app/core/models/page";
import { Converters } from "@app/core/utils/converters";
import { CompareToBuilder } from "@app/core/utils/compare-to-builder";
import { Sort } from "@app/core/models/sort";
import { SelectableItem } from "@app/core/models/selectable-item";

import { ExampleCRUDDetailDTO } from "../modules/example-crud-detail-dto";
import { ExampleCRUDForSearchDTO } from "../modules/example-crud-for-search-dto";
import { ExampleCRUDForUpdateDTO } from "../modules/example-crud-for-update-dto";
import { ExampleCRUDUpdateDTO } from "../modules/example-crud-update-dto";
import { ExampleCRUDForCreateDTO } from "../modules/example-crud-for-create-dto";
import { ExampleCRUDCreateDTO } from "../modules/example-crud-create-dto";
import { ExampleCRUDSearchFilter } from "../modules/example-crud-search-filter";
import { ExampleCRUDSearchResultDTO } from "../modules/example-crud-search-result-dto";


const MOCK_TYPES: SelectableItem<string>[] = [
  { id: '001', description: '001 - description', tooltip: 'tooltip for id 001' },
  { id: '002', description: '002 - description', tooltip: 'tooltip for id 002' },
  { id: '003', description: '003 - description', tooltip: 'tooltip for id 003' },
  { id: '004', description: '004 - description', tooltip: 'tooltip for id 004' },
  { id: '005', description: '005 - description', tooltip: 'tooltip for id 005' }
];

const ITEMS: ExampleCRUDSearchResultDTO[] = Array.from({ length: 93 }, (value, index) => {
  const id = index + 1;
  return {

    id: '' + id,
    code: `ABC-${id}`,
    description: `Teste do item ABC-${id}`,
    active: id % 3 == 0,
    scale: id % 5 + 1,
    type: MOCK_TYPES[index % MOCK_TYPES.length].description,
    actions: { canUpdate: id % 3 == 0, canDelete: id % 2 == 0, canDetail: true }
  }
});

@Injectable()
export class ExampleCRUDAPIService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  forCreate(params: any): Observable<ExampleCRUDForCreateDTO> {
    return of({
      formData: {
        code: undefined,
        description: undefined,
        active: false,
        scale: 3,
        type: undefined
      },
      dataToBuildForm: {
        types: MOCK_TYPES
      }
    });
  }

  forSearch(searchFilter: ExampleCRUDSearchFilter): Observable<ExampleCRUDForSearchDTO> {
    return of({
      dataToBuildForm: {
        types: MOCK_TYPES
      },
      formData: {
        text: searchFilter.text,
        types: MOCK_TYPES.filter(i => includes(searchFilter.types, i.id))
      },
      result: createPage(searchFilter)
    });
  }

  forUpdate(id: string): Observable<ExampleCRUDForUpdateDTO> {
    const item = ITEMS.find(i => i.id === id) as any;
    return of({
      formData: item,
      dataToBuildForm: {
        types: MOCK_TYPES
      }
    });
  }

  public create(data: ExampleCRUDCreateDTO): Observable<any> {
    const newId = '' + (ITEMS.length + 1);
    const newItem = data as ExampleCRUDSearchResultDTO;
    newItem.id = newId;
    newItem.actions = {
      canDelete: true,
      canDetail: true,
      canUpdate: true
    };
    ITEMS.push(newItem);

    return of({ id: newId });
  }

  public delete(id: string): Observable<any> {
    return of({});
  }

  public detail(id: string): Observable<ExampleCRUDDetailDTO> {
    const item = ITEMS.find(i => i.id === id) as ExampleCRUDDetailDTO;
    return of(item);
  }

  public search(searchFilter: ExampleCRUDSearchFilter): Observable<Page<ExampleCRUDSearchResultDTO>> {
    const queryParams = Converters.removerUndefinedEmptyNull(searchFilter);
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams })
    return of(createPage(searchFilter));
  }

  public update(id: string, data: ExampleCRUDUpdateDTO): Observable<any> {
    return of({});
  }
}

function createPage(searchFilter: ExampleCRUDSearchFilter) {
  const items = ITEMS.filter(i =>
    (!searchFilter.text ? true : i.description.includes(searchFilter.text))
    && (!searchFilter.types ? true : searchFilter.types.map(t => i.type.startsWith(t)).reduce((res, cur) => res || cur, false))
  );

  sortItems(items, searchFilter.sort);

  return Page.from(items, searchFilter.pn, searchFilter.ps, searchFilter.sort);
}


function filterItems(values: ExampleCRUDSearchResultDTO[], text?: string): ExampleCRUDSearchResultDTO[] {
  if (!text) {
    return values;
  }

  return values.filter((i) => i.description.includes(text))
}

function sortItems(values: ExampleCRUDSearchResultDTO[], sort?: Sort[]) {
  values.sort((lhs, rhs) => CompareToBuilder.builder()
    .appendWithSort(lhs, rhs, sort)
    .append(lhs.code, rhs.code)
    .build());
}
