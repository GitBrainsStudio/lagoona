import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent {

  get backgroundImage() : string
  {
    return `background-image: url('assets/images/rectangle-bottom.svg');`
  }
  
}