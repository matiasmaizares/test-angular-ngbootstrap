import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerI18nComponentComponent } from './datepicker-i18n-component.component';

describe('DatepickerI18nComponentComponent', () => {
  let component: DatepickerI18nComponentComponent;
  let fixture: ComponentFixture<DatepickerI18nComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerI18nComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerI18nComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
