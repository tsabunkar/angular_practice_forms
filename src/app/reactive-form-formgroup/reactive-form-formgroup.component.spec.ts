import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormgroupComponent } from './reactive-form-formgroup.component';

describe('ReactiveFormFormgroupComponent', () => {
  let component: ReactiveFormFormgroupComponent;
  let fixture: ComponentFixture<ReactiveFormFormgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormFormgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
