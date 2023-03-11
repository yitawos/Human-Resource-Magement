import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaleryComponent } from './view-salery.component';

describe('ViewSaleryComponent', () => {
  let component: ViewSaleryComponent;
  let fixture: ComponentFixture<ViewSaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
