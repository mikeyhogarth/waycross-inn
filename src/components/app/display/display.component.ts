import { Component, OnInit } from '@angular/core';
const template = require('./display.component.pug');

@Component({
  selector: 'wc-display',
  template: template() 
})
export class DisplayComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}