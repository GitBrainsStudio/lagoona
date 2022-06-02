import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TourFormComponent } from './components/tour-form/tour-form.component';

@NgModule({
  declarations: [
    TourFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TourFormComponent
  ]
})
export class TourModule { }
