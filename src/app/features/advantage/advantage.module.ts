import { AdvantageCardCollectionComponent } from './components/advantage-card-collection/advantage-card-collection.component';
import { AdvantageCardComponent } from './components/advantage-card/advantage-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AdvantageCardComponent, AdvantageCardCollectionComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AdvantageCardComponent, AdvantageCardCollectionComponent]
})
export class AdvantageModule {}
