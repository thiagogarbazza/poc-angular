import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ExampleCRUDDetailDTO } from '../../modules/example-crud-detail-dto';
import { ExampleCRUDAPIService } from '../../services/example-crud-api.service';

@Component({
  selector: 'app-example-crud-detail',
  templateUrl: './example-crud-detail.component.html',
  styleUrls: ['./example-crud-detail.component.scss']
})
export class ExampleCRUDDetailComponent implements OnInit {

  public item: ExampleCRUDDetailDTO

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data['item'];
  }

  voltar(): void {
    this.router.navigate(['examples/crud'])
  }

  delete(): void {
    this.exampleCRUDAPIService.delete(this.item.id).subscribe(response => {
      alert('deletado' + this.item.id)
    });
  }
}
