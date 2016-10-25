import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `
    <div>
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`
})
export class TodoAppComponent { }
