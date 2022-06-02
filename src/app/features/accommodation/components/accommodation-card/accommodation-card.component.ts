import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.scss']
})
export class AccommodationCardComponent implements OnInit {

  @Input() isLast:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
