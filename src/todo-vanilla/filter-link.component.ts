import { Component } from '@angular/core';
import { FilterType }  from './model';
import { TodoService } from './services';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template:
    `<a href="#" (click)="applyFilter()"
        [ngClass]="{'active': active, 'inactive': !active}">
      <ng-content></ng-content>
    </a>`,
  styles: [`
    .active   { text-decoration: default; }
    .inactive { text-decoration: none; }
  `]
})
export class FilterLinkComponent {
  filter: FilterType;

  constructor(private service: TodoService) { }

  applyFilter() {
    this.service.setCurrentFilter(this.filter);
  }

  get active() {
    return this.filter === this.service.getCurrentFilter();
  }
}
