import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar = true;
  title = 'emsAngular';
  toggleMenu() {
    this.showSidebar = !this.showSidebar;
  }
}
