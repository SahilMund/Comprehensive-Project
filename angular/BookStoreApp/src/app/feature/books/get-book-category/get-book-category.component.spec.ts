import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookCategoryComponent } from './get-book-category.component';

describe('GetBookCategoryComponent', () => {
  let component: GetBookCategoryComponent;
  let fixture: ComponentFixture<GetBookCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
