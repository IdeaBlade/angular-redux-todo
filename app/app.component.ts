import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    `<h1>Angular todos with redux</h1>
    <div>
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`
})
export class AppComponent { }
