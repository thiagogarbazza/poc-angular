import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SimpleMessage } from '@app/core/models/simple-message';

export class NotificationEvent {
  target?: string
  dangers?: string[]
  infos?: string[]
  successes?: string[]
  warnings?: string[]
}

@Injectable()
export class NotificationsService {

  public notifications$: BehaviorSubject<NotificationEvent> = new BehaviorSubject({});

  constructor() { }

  public clear() {
    this.notifications$.next({ });
  }

  public danger(message: string, target: string = 'default') {
    this.notifications$.next({ target: 'default', dangers: [message] });
  }

  public info(message: string, target: string = 'default') {
    this.notifications$.next({ target: 'default', infos: [message] });
  }

  public notify(messages: SimpleMessage[], target: string = 'default') {
    this.notifications$.next({ target: target });
  }

  public success(message: string, target: string = 'default') {
    this.notifications$.next({ target: 'default', successes: [message] });
  }

  public warning(message: string, target: string = 'default') {
    this.notifications$.next({ target: 'default', warnings: [message] });
  }
}
