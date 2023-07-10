import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example-inputs-template',
  templateUrl: './example-inputs-template.component.html',
  styleUrls: ['./example-inputs-template.component.scss']
})
export class ExampleInputsTemplateComponent implements OnInit {

  public activeTab:  string = '';
  private subscription: Array<Subscription> = [];

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription[0] = this.activatedRoute.url.subscribe(() => {
      if (this.activatedRoute.snapshot.firstChild) {
        this.activeTab = this.activatedRoute.snapshot.firstChild.data['activeTab'];
      }
     });

     this.subscription[1] = this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.activeTab = data.snapshot.data['activeTab'];
      }
    });
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }
}
