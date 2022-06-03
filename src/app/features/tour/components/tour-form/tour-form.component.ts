import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent {

  get selectBackgroundImage() : string
  {
    return `url('assets/images/rectangle-bottom.svg')`
  }
}