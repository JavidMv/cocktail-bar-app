import { Cocktail } from './../../models/cocktail';
import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';
import { PreorderService } from 'src/app/services/preorder.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(
    private barService: BarService,
    public preorderService: PreorderService
  ) {}

  ngOnInit(): void {
    this.cocktails = this.barService.getAll();
  }
}
