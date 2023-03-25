import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexComponent } from './adminindex.component';

describe('AdminindexComponent', () => {
  let component: AdminindexComponent;
  let fixture: ComponentFixture<AdminindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
