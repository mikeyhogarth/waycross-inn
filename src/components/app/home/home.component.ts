import { Component } from '@angular/core';
const template = require('./home.component.pug');

@Component({
  selector: 'my-home',
  template: template() 
})
export class HomeComponent {
  constructor() { }
}