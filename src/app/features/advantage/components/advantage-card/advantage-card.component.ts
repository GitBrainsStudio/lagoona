import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-card',
  templateUrl: './advantage-card.component.html',
  styleUrls: ['./advantage-card.component.scss']
})
export class AdvantageCardComponent {

  @Input() image:string = 'adv-1.svg';
  @Input() text:string = 'Идейные соображения высшего порядка, а также постоянный количественный рост';

  get backgroundImage() : string 
  {
    return `url('/assets/images/${this.image}')`
  }
}