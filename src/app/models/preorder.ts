import { PreorderItem } from './preorderItem';

export class Preorder {
  items: PreorderItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
  totalQuantity: number = 0;
}
