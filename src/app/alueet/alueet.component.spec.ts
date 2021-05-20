import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlueetComponent } from './alueet.component';

describe('AlueetComponent', () => {
  let component: AlueetComponent;
  let fixture: ComponentFixture<AlueetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlueetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlueetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
