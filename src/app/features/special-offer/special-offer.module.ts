import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferCardComponent } from './components/special-offer-card/special-offer-card.component';
import { MatIconModule } from '@angular/material/icon';
import { SpecialOfferCardCollectionComponent } from './components/special-offer-card-collection/special-offer-card-collection.component';

@NgModule({
  declarations: [
    SpecialOfferCardComponent,
    SpecialOfferCardCollectionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SpecialOfferCardComponent,
    SpecialOfferCardCollectionComponent
  ]
})
export class SpecialOfferModule { }
