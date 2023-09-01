import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationEvent, NotificationsService } from './notifications.service';

/** Delay, in milliseconds, form focus on notifications */
const DELAY = 250;
const SCROLL_INTO_VIEW_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'center'
};

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy{

  @Input() target: string = 'default';
  notification?: NotificationEvent = undefined;
  private subscriptions: Subscription[] = [];

  constructor(private notificationsService: NotificationsService) { }

  public clear() {
    this.notification = undefined;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    const subscription = this.notificationsService.notifications$.subscribe((notification: NotificationEvent) => {
      if (notification === null || this.target === notification?.target) {
        this.notification = notification;
        setTimeout(()=> this.scrollTo(), DELAY);
      }
    });
    this.subscriptions.push(subscription);
  }

  private scrollTo() {
    if(!this.notification
      || !(this.notification.dangers || this.notification.infos || this.notification.successes || this.notification.warnings)) {
      return;
    }

    const element = document.getElementById(`feedback_${this.target}`);
    if(element) {
      element.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
    } else {
      const elementTOP = document.getElementById('top');
      if (elementTOP){
        elementTOP.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
      }
    }
  }
}
