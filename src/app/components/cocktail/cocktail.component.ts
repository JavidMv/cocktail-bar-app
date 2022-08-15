import { Cocktail } from './../../models/cocktail';

import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { PreorderService } from 'src/app/services/preorder.service';
import { Preorder } from 'src/app/models/preorder';
import { PreorderItem } from 'src/app/models/preorderItem';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class CocktailComponent implements OnInit {
  localPreorder: Preorder;
  @Input() cocktail: Cocktail;
  constructor(private preorderService: PreorderService) {
    this.setPreorder();
  }

  ngOnInit(): void {}

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }

  addToPreorder() {
    this.preorderService.addToPreorder(this.cocktail);
  }

  removeFromPreorder(preorderItem: PreorderItem): void {
    this.preorderService.removeFromPreorder(preorderItem.cocktail.id);
    this.setPreorder();
  }

  setPreorder(): void {
    this.localPreorder = this.preorderService.getPreorder();
  }
}
