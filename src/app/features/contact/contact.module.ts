import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContactsCardComponent } from './components/contacts-card/contacts-card.component';

@NgModule({
  declarations: [ContactsCardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ContactsCardComponent
  ]
})
export class ContactModule { }