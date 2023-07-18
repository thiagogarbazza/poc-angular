import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styleUrls: ['./invalid-feedback.component.scss']
})
export class InvalidFeedbackComponent implements OnInit {

  @Input() control: any;

  constructor() { }

  ngOnInit(): void {

  }
}
