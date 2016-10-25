import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    `<h1>
      <button (click)="more()">+</button>
      Angular todos with redux
      <button (click)="less()">-</button>      
    </h1>
    <todo-app *ngFor="let app of apps"></todo-app>`
})
export class AppComponent {
  apps = [1];
  less() { this.apps.pop(); }
  more() { this.apps.push(1); }
}
