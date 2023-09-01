import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { DataGridEventDTO } from '@app/core/components/data-grid/data-grid-event-dto';
import { ModalConfirmService } from '@app/core/components/modals/modal-confirm/modal-confirm.service';
import { AbstractSearchFilter } from '@app/core/models/abstract-search-filter';
import { Converters } from '@app/core/utils/converters';

import { ExampleCRUDAPIService } from '../../services/example-crud-api.service';
import { ExampleCRUDForSearchDTODataToBuildForm, ExampleCRUDForSearchDTOFormData } from '../../modules/example-crud-for-search-dto';
import { ExampleCRUDSearchFilter } from '../../modules/example-crud-search-filter';
import { Page } from '@app/core/models/page';
import { ExampleCRUDSearchResultDTO } from '../../modules/example-crud-search-result-dto';
import { NotificationsService } from '@app/core/components/notifications/notifications.service';

@Component({
  selector: 'app-example-crud-search',
  templateUrl: './example-crud-search.component.html',
  styleUrls: ['./example-crud-search.component.scss']
})
export class ExampleCRUDSearchComponent implements OnInit {

  public dataToBuildForm: ExampleCRUDForSearchDTODataToBuildForm
  public formGroup: FormGroup;
  public result: Page<ExampleCRUDSearchResultDTO>;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private exampleCRUDAPIService: ExampleCRUDAPIService,
    private modalConfirmService: ModalConfirmService, private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    const item = this.activatedRoute.snapshot.data['item'];

    this.dataToBuildForm = item.dataToBuildForm;
    this.formGroup = this.createFormGroup(item.formData);
    this.result = item.result;
  }

  public clean() {
    this.formGroup.reset();
  }

  public delete(item: ExampleCRUDSearchResultDTO) {
    this.modalConfirmService.open({ title: `Exclusão do registro ${item.code}`, message: `Confirma exclusão do registro ${item.code}?`}).subscribe(() =>
      this.exampleCRUDAPIService.delete(item.id).subscribe(response => {
        this.notificationsService.success(`Registro ${item.code} deletado com sucesso.`);
      })
    );
  }

  public onChangeDataGrid(dataGrid: DataGridEventDTO) {
    this.search(this.formGroup.value, {pn: dataGrid.pageNumber, ps: dataGrid.pageSize, sort: dataGrid.sort});
  }

  public onSubmit() {
    this.search(this.formGroup.value, {pn: 0, ps: this.result.size, sort: this.result.sort});
  }

  private createFormGroup(formData: ExampleCRUDForSearchDTOFormData) {
    return this.formBuilder.group({
      text: new FormControl(formData.text, []),
      types: new FormControl(formData.types, []),
    });
  }

  private createSearchFilter(value: ExampleCRUDForSearchDTOFormData, abstractSearchFilter?: AbstractSearchFilter): ExampleCRUDSearchFilter {
    return {
      text: Converters.string(value.text),
      types: Converters.identifiables(value.types),

      pn: abstractSearchFilter?.pn,
      ps: abstractSearchFilter?.ps,
      sort: abstractSearchFilter?.sort
    };
  }

  private search(value: ExampleCRUDForSearchDTOFormData, abstractSearchFilter?: AbstractSearchFilter) {
    const searchFilter = this.createSearchFilter(value, abstractSearchFilter);

    this.exampleCRUDAPIService.search(searchFilter).subscribe(response => {
      this.result = response;
    });
  }
}
