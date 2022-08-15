import { PreorderItem } from './../../models/preorderItem';
import { Preorder } from './../../models/preorder';
import { PreorderService } from './../../services/preorder.service';
import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.scss'],
})
export class PreorderComponent implements OnInit {
  preorder: Preorder;
  constructor(
    public preorderService: PreorderService,
    private barService: BarService
  ) {
    this.setPreorder();
  }

  ngOnInit(): void {}

  removeFromPreorder(preorderItem: PreorderItem): void {
    this.preorderService.removeFromPreorder(preorderItem.cocktail.id);
    this.setPreorder();
  }

  changeQuantity(preorderItem: PreorderItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this.preorderService.changeQuantity(preorderItem.cocktail.id, quantity);
    this.setPreorder();
  }

  setPreorder(): void {
    this.preorder = this.preorderService.getPreorder();
  }
}
