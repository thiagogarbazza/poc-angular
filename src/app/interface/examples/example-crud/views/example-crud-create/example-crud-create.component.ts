import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Converters } from '@app/core/utils/converters';

import { ExampleCRUDAPIService } from '../../services/example-crud-api.service';
import { ExampleCRUDForCreateDTODataToBuildForm, ExampleCRUDForCreateDTOFormData } from '../../modules/example-crud-for-create-dto';
import { ExampleCRUDCreateDTO } from '../../modules/example-crud-create-dto';

@Component({
  selector: 'app-example-crud-create',
  templateUrl: './example-crud-create.component.html',
  styleUrls: ['./example-crud-create.component.scss']
})
export class ExampleCRUDCreateComponent implements OnInit {

  public formGroup: FormGroup;
  public dataToBuildForm: ExampleCRUDForCreateDTODataToBuildForm;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  ngOnInit(): void {
    const item = this.activatedRoute.snapshot.data['item'];

    this.dataToBuildForm = item.dataToBuildForm;
    this.formGroup = this.createFormGroup(item.formData);
  }

  public voltar(): void {
    switch (this.activatedRoute.snapshot.queryParams['b']) {
      case 'search': {this.router.navigate(['examples/crud']); break;}
      default: {this.router.navigate(['examples/crud']);}
    }
  }

  public onSubmit() {
    const data = this.create(this.formGroup.value);
    this.exampleCRUDAPIService.create(data).subscribe(response => {
      this.router.navigate(['examples/crud', response.id]);
    });
  }

  private createFormGroup(formData: ExampleCRUDForCreateDTOFormData) {
    return this.formBuilder.group({
      code: new FormControl(formData.code, [Validators.required]),
      description: new FormControl(formData.description, [Validators.required]),
      active: new FormControl(formData.active, [Validators.required]),
      scale: new FormControl(formData.scale, [Validators.required]),
      type: new FormControl(formData.type, [Validators.required]),
      observation: new FormControl(formData.observation, []),
    });
  }

  private create(value: ExampleCRUDForCreateDTOFormData): ExampleCRUDCreateDTO {
    return {
      code: Converters.string(value.code),
      description: Converters.string(value.description),
      observation: Converters.string(value.observation),
      active: Converters.boolean(value.active),
      scale: Converters.number(value.scale),
      type: Converters.identifiable(value.type)
    };
  }
}
