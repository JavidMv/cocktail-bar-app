import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReservationData } from 'src/app/models/reservationData';
import { PreorderService } from 'src/app/services/preorder.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  constructor(public preorderService: PreorderService) {}

  completedOrder: ReservationData | null = null;

  ngOnInit(): void {}

  submitForm(reservationForm: FormGroup) {
    this.completedOrder = {
      name: reservationForm.value.name || null,
      tel: reservationForm.value.tel || null,
      date: reservationForm.value.date || null,
      time: reservationForm.value.time || null,
      tableFor: reservationForm.value.tableFor || null,
    };

    console.log(this.completedOrder);
  }
}
