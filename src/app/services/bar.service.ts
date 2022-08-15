import { Cocktail } from './../models/cocktail';
import { Injectable } from '@angular/core';
import { cocktails } from './bar.data';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  constructor() {}

  getAll(): Cocktail[] {
    return cocktails;
  }
}
