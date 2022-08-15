import { Cocktail } from './../models/cocktail';
import { Preorder } from './../models/preorder';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PreorderItem } from '../models/preorderItem';

@Injectable({
  providedIn: 'root',
})
export class PreorderService {
  private preorder: Preorder = new Preorder();

  isVisible$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
  }
  constructor() {}

  addToPreorder(cocktail: Cocktail): void {
    let preorderItem = this.preorder.items.find(
      (item) => item.cocktail.id === cocktail.id
    );
    if (preorderItem) {
      return;
    }
    this.preorder.items.push(new PreorderItem(cocktail));
  }

  removeFromPreorder(cocktailId: number): void {
    this.preorder.items = this.preorder.items.filter(
      (item) => item.cocktail.id != cocktailId
    );
  }
  changeQuantity(cocktailId: number, quantity: number) {
    let preorderItem = this.preorder.items.find(
      (item) => item.cocktail.id === cocktailId
    );

    if (!preorderItem) return;

    preorderItem.quantity = quantity;
  }

  increaseQuant(cocktail: Cocktail) {
    let preorderItem = this.preorder.items.find(
      (item) => item.cocktail.id === cocktail.id
    );
    if (preorderItem) {
      this.changeQuantity(cocktail.id, preorderItem.quantity + 1);
      return;
    }
  }

  decreaseQuant(cocktail: Cocktail) {
    let preorderItem = this.preorder.items.find(
      (item) => item.cocktail.id === cocktail.id
    );
    if (preorderItem) {
      this.changeQuantity(cocktail.id, preorderItem.quantity - 1);
      return;
    }
  }

  getPreorder(): Preorder {
    return this.preorder;
  }
}
