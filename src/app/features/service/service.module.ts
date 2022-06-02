import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceCardCollectionComponent } from './components/service-card-collection/service-card-collection.component';

@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceCardCollectionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ServiceCardComponent,
    ServiceCardCollectionComponent
  ]
})
export class ServiceModule { }
