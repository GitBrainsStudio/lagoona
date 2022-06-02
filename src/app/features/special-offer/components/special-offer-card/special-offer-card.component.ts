import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offer-card',
  templateUrl: './special-offer-card.component.html',
  styleUrls: ['./special-offer-card.component.scss']
})
export class SpecialOfferCardComponent implements OnInit {

  @Input() size:"default" | "large" = "default";

  get isLarge()
  {
    return this.size == "large";
  }

  constructor() { }

  ngOnInit(): void {
  }
}
