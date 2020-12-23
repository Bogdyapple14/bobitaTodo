import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu: boolean = false;

  revealMenu() {
    this.menu = true;
  }

  onCloseMenu() {
    this.menu = false;
  }
}
