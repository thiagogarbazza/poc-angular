import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-tabs',
  templateUrl: './example-tabs.component.html',
  styleUrls: ['./example-tabs.component.scss']
})
export class ExampleTabsComponent implements OnInit {

  public activeTabStart = '2'
  public activeTabEnd = '2'
  public activeTabTop = '2'
  public activeTabBottom = '2'

  constructor () {}
  ngOnInit(): void {

  }

  selectTabStart(id: string) {
    this.activeTabStart = id;
  }

  selectTabEnd(id: string) {
    this.activeTabEnd = id;
  }

  selectTabTop(id: string) {
    this.activeTabTop = id;
  }

  selectTabBottom(id: string) {
    this.activeTabBottom = id;
  }
}
