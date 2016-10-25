/**
 * Multi TodoApp Version
 * Usage: in '../main.ts'
 *   + import { AppModule } from './app2/app.module';
 *   - import { AppModule } from './app.module';
 */

import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { AppModule as OrigModule} from '../app.module';
import { AppComponent }           from './app.component';

@NgModule({
  imports:      [ CommonModule, OrigModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
