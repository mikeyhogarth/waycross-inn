import { Component, OnInit } from '@angular/core';
const template = require('./status-bar.component.pug');

@Component({
  selector: 'wc-status-bar',
  styleUrls: ['./status-bar.component.scss'],
  template: template()
})
export class StatusBarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}