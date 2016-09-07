import { Component } from '@angular/core';
const template = require('./home.component.pug');

@Component({
  selector: 'wc-home',
  template: template() 
})
export class HomeComponent {
  constructor() { }
}