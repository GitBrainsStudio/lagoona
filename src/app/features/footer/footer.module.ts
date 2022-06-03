import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatIconModule],
  exports: [FooterComponent]
})
export class FooterModule {}
