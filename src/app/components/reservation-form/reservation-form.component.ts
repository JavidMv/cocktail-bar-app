import { SubjectServiceService } from './../../services/subject-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationData } from 'src/app/models/reservationData';
import { PreorderService } from 'src/app/services/preorder.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  @Output() handleSubmit = new EventEmitter<FormGroup>();

  constructor(public preorderService: PreorderService) {}
  reservationForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    tel: new FormControl<string>('', Validators.required),
    date: new FormControl<string>('', Validators.required),
    time: new FormControl<string>('', Validators.required),
    tableFor: new FormControl<string>('', Validators.required),
  });

  minDate: string;
  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow.toISOString().slice(0, 10);
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submitForm() {
    this.handleSubmit.emit(this.reservationForm);
  }
}
