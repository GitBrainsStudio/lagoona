import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AdvantageCardComponent } from './components/advantage-card/advantage-card.component';
import { AdvantageCardCollectionComponent } from './components/advantage-card-collection/advantage-card-collection.component';

@NgModule({
  declarations: [
    AdvantageCardComponent,
    AdvantageCardCollectionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AdvantageCardComponent,
    AdvantageCardCollectionComponent
  ]
})
export class AdvantageModule { }
