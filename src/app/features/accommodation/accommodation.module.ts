import { AccommodationCardCollectionComponent } from './components/accommodation-card-collection/accommodation-card-collection.component';
import { AccommodationCardComponent } from './components/accommodation-card/accommodation-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AccommodationCardComponent,
    AccommodationCardCollectionComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [AccommodationCardComponent, AccommodationCardCollectionComponent]
})
export class AccommodationModule {}
