import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ExampleCRUDAPIService } from "../../services/example-crud-api.service";
import { ExampleCRUDForCreateDTO } from "../../modules/example-crud-for-create-dto";

@Injectable()
export class ExampleCRUDCreateResolver implements Resolve<ExampleCRUDForCreateDTO> {

  constructor(private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExampleCRUDForCreateDTO> {
    return this.exampleCRUDAPIService.forCreate(route.params['id']);
  }
}
