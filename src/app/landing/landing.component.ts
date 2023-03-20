import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('LandingComponent.ngAfterViewInit()');
  }
}

