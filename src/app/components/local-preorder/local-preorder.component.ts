import { PreorderItem } from './../../models/preorderItem';
import { Preorder } from './../../models/preorder';
import { PreorderService } from './../../services/preorder.service';
import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';
import { ReservationData } from 'src/app/models/reservationData';

@Component({
  selector: 'app-local-preorder',
  templateUrl: './local-preorder.component.html',
  styleUrls: ['./local-preorder.component.scss'],
})
export class LocalPreorderComponent implements OnInit {
  localPreorder: Preorder;
  constructor(
    public preorderService: PreorderService,
    private barService: BarService
  ) {
    this.setPreorder();
  }

  completedOrder: ReservationData | null = null;

  ngOnInit(): void {}

  removeFromPreorder(preorderItem: PreorderItem): void {
    this.preorderService.removeFromPreorder(preorderItem.cocktail.id);
    this.setPreorder();
  }

  changeQuantity(preorderItem: PreorderItem): void {
    let quantity = 1;
    this.preorderService.changeQuantity(preorderItem.cocktail.id, quantity);
    this.setPreorder();
  }

  setPreorder(): void {
    this.localPreorder = this.preorderService.getPreorder();
  }

  increaseQuant(preorderItem: PreorderItem) {
    preorderItem.quantity = preorderItem.quantity + 1;
  }

  decreaseQuant(preorderItem: PreorderItem) {
    preorderItem.quantity = preorderItem.quantity - 1;
    if (preorderItem.quantity <= 0) {
      this.preorderService.removeFromPreorder(preorderItem.cocktail.id);
    }
  }
}
