import { Component, OnInit } from '@angular/core';
const template = require('./notifications.component.pug');
@Component({
  selector: 'wc-notifications',
  styleUrls: ['./notifications.component.scss'],
  template: template()
})
export class NotificationsComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}