import { Component } from '@angular/core';
const template = require('./overview.component.pug');

@Component({
  selector: 'wc-overview',
  template: template() 
})
export class OverviewComponent {
  constructor() { }
}