import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Converters } from '@app/core/utils/converters';

import { ExampleCRUDAPIService } from '../../services/example-crud-api.service';
import { ExampleCRUDForUpdateDTODataToBuildForm, ExampleCRUDForUpdateDTOFormData } from '../../modules/example-crud-for-update-dto';
import { ExampleCRUDUpdateDTO } from '../../modules/example-crud-update-dto';

@Component({
  selector: 'app-example-crud-update',
  templateUrl: './example-crud-update.component.html',
  styleUrls: ['./example-crud-update.component.scss']
})
export class ExampleCRUDUpdateComponent implements OnInit {

  public id: string;
  public formGroup: FormGroup;
  public dataToBuildForm: ExampleCRUDForUpdateDTODataToBuildForm;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  ngOnInit(): void {
    const item = this.activatedRoute.snapshot.data['item'];

    this.id = item.formData.id;
    this.dataToBuildForm = item.dataToBuildForm;
    this.formGroup = this.createFormGroup(item.formData);
  }

  public voltar(): void {
    switch (this.activatedRoute.snapshot.queryParams['b']) {
      case 'detail': {this.router.navigate(['examples/crud/', this.id]); break;}
      case 'search': {this.router.navigate(['examples/crud']); break;}
      default: {this.router.navigate(['examples/crud']);}
    }
  }

  public onSubmit() {
    const data = this.create(this.formGroup.value);
    this.exampleCRUDAPIService.update(this.id, data).subscribe(response => {
      console.log(this.id, data);
      alert('atualizado')
    });
  }

  private createFormGroup(formData: ExampleCRUDForUpdateDTOFormData) {
    return this.formBuilder.group({
      code: new FormControl(formData.code, [Validators.required]),
      description: new FormControl(formData.description, [Validators.required]),
      active: new FormControl(formData.active, [Validators.required]),
      scale: new FormControl(formData.scale, [Validators.required]),
      type: new FormControl(formData.type, [Validators.required]),
      observation: new FormControl(formData.observation, []),
    });
  }

  private create(value: ExampleCRUDForUpdateDTOFormData): ExampleCRUDUpdateDTO {
    return {
      code: Converters.string(value.code),
      description: Converters.string(value.description),
      active: Converters.boolean(value.active),
      scale: Converters.number(value.scale),
      type: Converters.identifiable(value.type),
      observation: Converters.string(value.observation),
    };
  }
}
