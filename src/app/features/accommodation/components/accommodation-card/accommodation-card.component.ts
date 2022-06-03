import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.scss']
})
export class AccommodationCardComponent implements OnInit {

  @Input() isLast:boolean = false;
  @Input() image:string = 'hotel-1.jpg';
  @Input() price:string = '4 698'
  @Input() title:string = 'Lagoona española';
  @Input() description:string = 'Барселона, Испания'
  @Input() rating:number = 5;

  ratingStars:{ icon:string }[] = [];

  get backgroundImage() : string 
  {
    return `url('assets/images/${this.image}')`
  }

  constructor() { }

  ngOnInit(): void {
    this.initRatingStars();
  }

  initRatingStars()
  {
    for (var i = 1; i <= 5; i ++)
    {
      if (i <= this.rating)
      {
        this.ratingStars.push({icon: 'star-1'});
      }
      else
      {
        this.ratingStars.push({icon: 'star-2'});
      }
    }
  }
}