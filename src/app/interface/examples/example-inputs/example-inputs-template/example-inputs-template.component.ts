

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-example-inputs-template',
  templateUrl: './example-inputs-template.component.html',
  styleUrls: ['./example-inputs-template.component.scss']
})
export class ExampleInputsTemplateComponent implements OnInit {

  public activeTab:  string = '';

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      if (this.activatedRoute.snapshot.firstChild) {
        this.activeTab = this.activatedRoute.snapshot.firstChild.data['activeTab'];
      }
     });

    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.activeTab = data.snapshot.data['activeTab'];
      }
    });
  }
}
