import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBProgressComponent } from './progress.component';

describe('SBProgressComponent', () => {
  let component: SBProgressComponent;
  let fixture: ComponentFixture<SBProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SBProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
