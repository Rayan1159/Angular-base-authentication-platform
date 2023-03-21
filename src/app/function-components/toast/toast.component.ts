import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  animations: [
    trigger('toast', [
      transition(':enter', [
        style({
          'transform': 'translateY(-100%)',
        }),
        style({
          transform: 'translateX(-50%)',
          left: '50%',
        }),
        animate('0.5s ease-in', style({transform: 'translateY(0)'}))
      ]),

    ]),
  ]
})
export class ToastComponent{
  public items = []
  constructor() {}

  showItems() {
  }
}
