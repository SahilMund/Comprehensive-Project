import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleBookComponent } from './get-single-book.component';

describe('GetSingleBookComponent', () => {
  let component: GetSingleBookComponent;
  let fixture: ComponentFixture<GetSingleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
