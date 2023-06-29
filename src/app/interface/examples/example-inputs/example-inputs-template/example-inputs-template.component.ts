

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-example-inputs-template',
  templateUrl: './example-inputs-template.component.html',
  styleUrls: ['./example-inputs-template.component.scss']
})
export class ExampleInputsTemplateComponent implements OnInit {

  public activeTab = 'date';

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe( (data: any) => {
      this.activeTab = data.activeTab;
    });
  }
}
