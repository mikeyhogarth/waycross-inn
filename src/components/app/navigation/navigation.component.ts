import { Component, OnInit } from '@angular/core';
const template = require('./navigation.component.pug')

@Component({
  selector: 'wc-navigation',
  template: template()
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}