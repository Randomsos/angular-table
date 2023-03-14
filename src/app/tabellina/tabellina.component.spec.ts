import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellinaComponent } from './tabellina.component';

describe('TabellinaComponent', () => {
  let component: TabellinaComponent;
  let fixture: ComponentFixture<TabellinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
