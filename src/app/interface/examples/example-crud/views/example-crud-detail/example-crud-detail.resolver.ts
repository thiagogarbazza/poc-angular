import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ExampleCRUDAPIService } from "../../services/example-crud-api.service";
import { ExampleCRUDDetailDTO } from "../../modules/example-crud-detail-dto";

@Injectable()
export class ExampleCRUDDetailResolver implements Resolve<ExampleCRUDDetailDTO> {

  constructor(private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExampleCRUDDetailDTO> {
    return this.exampleCRUDAPIService.detail(route.params['id']);
  }
}
