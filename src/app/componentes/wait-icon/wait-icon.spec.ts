import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitIcon } from './wait-icon';

describe('WaitIcon', () => {
  let component: WaitIcon;
  let fixture: ComponentFixture<WaitIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(WaitIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
