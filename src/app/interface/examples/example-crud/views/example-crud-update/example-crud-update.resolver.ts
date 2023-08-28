import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ExampleCRUDAPIService } from "../../services/example-crud-api.service";
import { ExampleCRUDForUpdateDTO } from "../../modules/example-crud-for-update-dto";

@Injectable()
export class ExampleCRUDUpdateResolver implements Resolve<ExampleCRUDForUpdateDTO> {

  constructor(private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExampleCRUDForUpdateDTO> {
    return this.exampleCRUDAPIService.forUpdate(route.params['id']);
  }
}
