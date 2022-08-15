import { Cocktail } from './cocktail';

export class PreorderItem {
  constructor(public cocktail: Cocktail) {}
  quantity: number = 1;
  get price(): number {
    return this.cocktail.price * this.quantity;
  }
}
