import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConHistoryComponent } from './con-history.component';

describe('ConHistoryComponent', () => {
  let component: ConHistoryComponent;
  let fixture: ComponentFixture<ConHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
