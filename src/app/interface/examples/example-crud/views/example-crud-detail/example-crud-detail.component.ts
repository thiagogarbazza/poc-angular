import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalConfirmService } from '@app/core/components/modals/modal-confirm/modal-confirm.service';

import { ExampleCRUDDetailDTO } from '../../modules/example-crud-detail-dto';
import { ExampleCRUDAPIService } from '../../services/example-crud-api.service';

@Component({
  selector: 'app-example-crud-detail',
  templateUrl: './example-crud-detail.component.html',
  styleUrls: ['./example-crud-detail.component.scss']
})
export class ExampleCRUDDetailComponent implements OnInit {

  public item: ExampleCRUDDetailDTO

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private exampleCRUDAPIService: ExampleCRUDAPIService,
    private modalConfirmService: ModalConfirmService
  ) { }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data['item'];
  }

  voltar(): void {
    this.router.navigate(['examples/crud'])
  }

  delete(): void {
    this.modalConfirmService.open({ title: `Exclusão do registro ${this.item.code}`, message: `Confirma exclusão do registro ${this.item.code}?`}).subscribe(() =>
      this.exampleCRUDAPIService.delete(this.item.id).subscribe(response => {
        alert("Deletando: " + this.item.id)
      })
    );
  }
}
