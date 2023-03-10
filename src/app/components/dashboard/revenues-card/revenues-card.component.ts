import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-revenues-card',
  templateUrl: './revenues-card.component.html',
  styleUrls: ['./revenues-card.component.scss']
})
export class RevenuesCardComponent {

  revenuesTotal: any

  constructor(
    private storeService: StoreService,

  ) {

    this.getBalanceRevenuesTotal()
  }

  getBalanceRevenuesTotal() {
    this.storeService.getBalanceRevenuesTotal().subscribe(res => {
      if(res) {
        this.createRevenues(res);      
        this.storeService.setRevenuesTotal(res.data.total);
        this.storeService.setBalanceTotal(true);
      }
    })
  }

  createRevenues(revenue: any) {
    this.revenuesTotal = {
      title: revenue.data.title,
      value: revenue.data.total
    }  

    return this.revenuesTotal;
  }
}
