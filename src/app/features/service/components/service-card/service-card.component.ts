import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() image: string = 'services-1.jpg';
  @Input() title: string = 'Эксклюзивное обслуживание';
  @Input() text: string =
    'Равным образом постоянный количественный рост и сфера нашей активности';

  get backgroundImage(): string {
    return `url('assets/images/${this.image}')`;
  }
}
