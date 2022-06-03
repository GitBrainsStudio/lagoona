import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-offer-card',
  templateUrl: './special-offer-card.component.html',
  styleUrls: ['./special-offer-card.component.scss']
})
export class SpecialOfferCardComponent {
  @Input() size: 'default' | 'large' = 'default';
  @Input() image: string = 'offer-1.jpg';
  @Input() title: string = 'Мальдивские острова';
  @Input() price: string = '55 000';

  get isLarge(): boolean {
    return this.size == 'large';
  }

  get backgroundImage(): string {
    return !this.isLarge
      ? `linear-gradient(90deg, rgba(48, 64, 89, 0.84) -2.9%, rgba(53, 65, 83, 0) 65.7%), url('assets/images/${this.image}')`
      : `url('assets/images/${this.image}')`;
  }
}
