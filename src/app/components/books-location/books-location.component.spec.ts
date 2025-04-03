import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLocationComponent } from './books-location.component';

describe('BooksLocationComponent', () => {
  let component: BooksLocationComponent;
  let fixture: ComponentFixture<BooksLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
