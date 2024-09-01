import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontatctsComponent } from './detailcontatcts.component';

describe('DetailcontatctsComponent', () => {
  let component: DetailcontatctsComponent;
  let fixture: ComponentFixture<DetailcontatctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcontatctsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcontatctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
