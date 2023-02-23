import { DashboardComponent } from './dashboard.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from './menu/menu.component';
import { RevenuesCardComponent } from './revenues-card/revenues-card.component';
import { DebtsCardComponent } from './debts-card/debts-card.component';
import { BalanceTotalCardComponent } from './balance-total-card/balance-total-card.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { DebtsComponent } from './debts/debts.component';
import { FooterComponent } from './footer/footer.component';
import { MessageHourComponent } from './message-hour/message-hour.component';
import { ImgProfileComponent } from './img-profile/img-profile.component';
import { CardViewComponent } from './card-view/card-view.component';
import { AddRevenuesComponent } from './add-revenues/add-revenues.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthsRevenuesComponent } from './months-revenues/months-revenues.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';

import  localePt from "@angular/common/locales/pt"
import { ShortenerPipe } from 'src/app/shared/pipes/shortener.pipe';
import { InputWidthDirective } from 'src/app/shared/input-width.directive';

registerLocaleData(localePt)

export const CustomCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix:'R$ ',
  suffix: '',
  thousands: '.'
}

@NgModule({
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    RevenuesCardComponent,
    DebtsCardComponent,
    BalanceTotalCardComponent,
    RevenuesComponent,
    DebtsComponent,
    FooterComponent,
    MessageHourComponent,
    ImgProfileComponent,
    CardViewComponent,
    AddRevenuesComponent,
    MonthsRevenuesComponent,
    ShortenerPipe,
    InputWidthDirective

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule

  ]

})
export class DashboardModule { }
