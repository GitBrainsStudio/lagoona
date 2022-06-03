import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { SpecialOfferCardCollectionComponent } from './components/special-offer-card-collection/special-offer-card-collection.component';
import { SpecialOfferCardComponent } from './components/special-offer-card/special-offer-card.component';

@NgModule({
  declarations: [
    SpecialOfferCardComponent,
    SpecialOfferCardCollectionComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [SpecialOfferCardComponent, SpecialOfferCardCollectionComponent]
})
export class SpecialOfferModule {}
