import { Component } from '@angular/core';
const template = require('./about.component.pug');

@Component({
  selector: 'my-about',
  template: template() 
})
export class AboutComponent {
  constructor() { }
}