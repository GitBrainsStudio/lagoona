import { AccommodationModule } from 'src/app/features/accommodation/accommodation.module';
import { AdvantageModule } from 'src/app/features/advantage/advantage.module';
import { CommonModule } from '@angular/common';
import { ContactModule } from 'src/app/features/contact/contact.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { ServiceModule } from 'src/app/features/service/service.module';
import { SpecialOfferModule } from 'src/app/features/special-offer/special-offer.module';
import { TourModule } from 'src/app/features/tour/tour.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderModule,
    SpecialOfferModule,
    AdvantageModule,
    ServiceModule,
    AccommodationModule,
    TourModule,
    ContactModule,
    FooterModule
  ]
})
export class HomePageModule {}
