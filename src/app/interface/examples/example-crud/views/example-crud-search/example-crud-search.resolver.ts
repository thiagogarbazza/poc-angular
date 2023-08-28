import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ExampleCRUDAPIService } from "../../services/example-crud-api.service";
import { ExampleCRUDForSearchDTO } from "../../modules/example-crud-for-search-dto";

@Injectable()
export class ExampleCRUDSearchResolver implements Resolve<ExampleCRUDForSearchDTO> {

  constructor(private exampleCRUDAPIService: ExampleCRUDAPIService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExampleCRUDForSearchDTO> {
    return this.exampleCRUDAPIService.forSearch(route.queryParams);
  }
}
