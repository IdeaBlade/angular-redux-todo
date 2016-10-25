import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { appStoreProvider } from './redux';


import { AppComponent }        from './app.component';
import { AddTodoComponent }    from './add-todo.component';
import { TodoListComponent }   from './todo-list.component';
import { TodoComponent }       from './todo.component';
import { FiltersComponent }    from './filters.component';
import { FilterLinkComponent } from './filter-link.component';
import { VisibleTodosPipe }    from './visible-todos-pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoComponent,
    FiltersComponent,
    FilterLinkComponent,
    VisibleTodosPipe
  ],
  providers: [
    appStoreProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
