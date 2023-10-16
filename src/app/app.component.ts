import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isThemeLight = true;
  title = 'angular-tour-of-heroes';

  ngOnInit(): void {
    this.isThemeLight = true;
  }

  onThemeSwitchChange() {
    this.isThemeLight = !this.isThemeLight;

    document.body.setAttribute(
      'data-theme',
      this.isThemeLight ? 'light' : 'dark'
    );
  }
}
