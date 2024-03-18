import { Component, OnInit, inject } from '@angular/core';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './custom-datepicker-i18n';

@Component({
  selector: 'app-datepicker-i18n-component',
  templateUrl: './datepicker-i18n-component.component.html',
  styleUrl: './datepicker-i18n-component.component.css',
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
  ],
})
export class DatepickerI18nComponentComponent {
  model!: NgbDateStruct;
  today = inject(NgbCalendar).getToday();
}
