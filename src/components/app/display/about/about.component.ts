import { Component } from '@angular/core';
const template = require('./about.component.pug');

@Component({
  selector: 'wc-about',
  template: template() 
})
export class AboutComponent {
  constructor() { }
}