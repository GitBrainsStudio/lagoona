import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AccommodationCardComponent } from './components/accommodation-card/accommodation-card.component';
import { AccommodationCardCollectionComponent } from './components/accommodation-card-collection/accommodation-card-collection.component';

@NgModule({
  declarations: [
    AccommodationCardComponent,
    AccommodationCardCollectionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AccommodationCardComponent,
    AccommodationCardCollectionComponent
  ]
})
export class AccommodationModule { }
