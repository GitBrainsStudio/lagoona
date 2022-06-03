import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ServiceCardCollectionComponent } from './components/service-card-collection/service-card-collection.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@NgModule({
  declarations: [ServiceCardComponent, ServiceCardCollectionComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ServiceCardComponent, ServiceCardCollectionComponent]
})
export class ServiceModule {}
