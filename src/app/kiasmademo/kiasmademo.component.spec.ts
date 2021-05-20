import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiasmademoComponent } from './kiasmademo.component';

describe('KiasmademoComponent', () => {
  let component: KiasmademoComponent;
  let fixture: ComponentFixture<KiasmademoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiasmademoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiasmademoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
