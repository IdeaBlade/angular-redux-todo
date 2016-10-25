import { Component, OnInit, OnDestroy } from '@angular/core';
import { Actions, AppStore, Unsubscribe } from './redux';
import { FilterType } from './model';

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
export class FilterLinkComponent implements OnInit, OnDestroy {
  active = false;
  filter: FilterType;
  unsubscribe: Unsubscribe;

  constructor(private appStore: AppStore) {
    this.unsubscribe = this.appStore
      .subscribe(() => this.updateActive());
  }

  ngOnInit() { this.updateActive(); }

  ngOnDestroy() { this.unsubscribe(); }

  applyFilter() {
    this.appStore.dispatch(Actions.setCurrentFilter(this.filter));
  }

  private updateActive(){
    this.active = (this.filter === this.appStore.getState().currentFilter);
  }
}
