import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReservationData } from '../models/reservationData';

@Injectable({
  providedIn: 'root',
})
export class SubjectServiceService {
  public dataSource = new BehaviorSubject<ReservationData>(
    {} as ReservationData
  );
  currentData = this.dataSource.asObservable();
  constructor() {}
  updateData(data: ReservationData) {
    this.dataSource.next(data);
  }
}
