import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehistoryComponent } from './homehistory.component';

describe('HomehistoryComponent', () => {
  let component: HomehistoryComponent;
  let fixture: ComponentFixture<HomehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
