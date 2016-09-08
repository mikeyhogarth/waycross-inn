import { Component } from '@angular/core';
const template = require('./taproom.component.pug');

@Component({
  selector: 'wc-taproom',
  template: template() 
})
export class TaproomComponent {
  constructor() { }
}