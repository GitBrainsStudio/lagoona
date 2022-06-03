import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
