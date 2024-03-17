import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerI18nComponentComponent } from './datepicker-i18n-component/datepicker-i18n-component.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, DatepickerI18nComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbDatepickerModule,
    NgbAlertModule,
    JsonPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
